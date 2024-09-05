import { FC, memo, useCallback, useState } from 'react'
import cx from 'classnames'
import { Flex } from '@mantine/core'
import { SettingsQueue } from 'entities/calculationSettings'
import { useCalculateGoalCastle, useCalculatePossibleCastle } from 'entities/castle'
import { ParametersQueue, useParameter } from 'entities/parameter'
import { ResourcesQueue } from 'entities/resource'
import { useCalculateUltimatePower } from 'entities/ultimatePower'
import Inputs from '../Inputs'
import ResultsPossible from '../Results'
import ResultsGoal from '../ResultsGoal'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const CastleCalculator: FC<Props> = memo(({ className }) => {
  const [goalCastleLevel, setGoalCastleLevel] = useState<number | undefined>()

  const [castleLevel = 0] = useParameter('castleParams_level')
  const { mutate: calculatePossibleCastle, data: possibleData } = useCalculatePossibleCastle()

  const {
    mutate: calculateGoalCastle,
    data: goalCastleLevelData,
    isSuccess: isCalculatedGoalCastle,
    reset: resetCalculateGoalCastle,
  } = useCalculateGoalCastle()
  const { mutate: calculateUltimatePower, data: ultimatePowerData } = useCalculateUltimatePower()
  const { mutate: calculateUltimatePowerGoal, data: ultimatePowerDataGoal } = useCalculateUltimatePower(goalCastleLevel)

  const handleCalculateButtonClick = useCallback(async () => {
    await ResourcesQueue.saveData()
    await ParametersQueue.saveData()
    await SettingsQueue.saveData()
    calculatePossibleCastle()

    const shouldCalculateGoalCastle = goalCastleLevel && !isNaN(goalCastleLevel) && goalCastleLevel > castleLevel

    if (shouldCalculateGoalCastle) {
      calculateGoalCastle({
        goalLevel: goalCastleLevel,
      })
      calculateUltimatePowerGoal(['castle'])
    } else {
      resetCalculateGoalCastle()
    }
    calculateUltimatePower(['castle'])
  }, [
    calculateGoalCastle,
    calculatePossibleCastle,
    calculateUltimatePower,
    goalCastleLevel,
    castleLevel,
    resetCalculateGoalCastle,
  ])

  return (
    <Flex className={cx(css.root, className)} gap={24} direction="column">
      <Inputs
        goalCastleLevel={goalCastleLevel}
        setGoalCastleLevel={setGoalCastleLevel}
        onCalculateButtonClick={handleCalculateButtonClick}
      />
      {possibleData && <ResultsPossible data={possibleData} ultimatePowerData={ultimatePowerData} />}
      {isCalculatedGoalCastle && goalCastleLevelData && (
        <ResultsGoal data={goalCastleLevelData} ultimatePowerData={ultimatePowerDataGoal} />
      )}
    </Flex>
  )
})

export default CastleCalculator
