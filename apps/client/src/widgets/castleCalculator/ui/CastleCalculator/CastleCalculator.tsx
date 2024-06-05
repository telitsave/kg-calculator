import React, { FC, ReactNode, memo, useCallback, useState } from 'react'
import cx from 'classnames'
import { useSettings } from 'entities/calculationSettings'
import { useCalculateGoalCastle, useCalculatePossibleCastle } from 'entities/castle'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import { Resources } from 'shared/api'
import Flexbox from 'shared/ui/Flexbox'
import Inputs from '../Inputs'
import ResultsPossible from '../Results'
import ResultsGoal from '../ResultsGoal'
import css from './styles.module.sass'


interface Props {
  className?: string
  getExtremePowerNode: (resources: Resources) => ReactNode
}

const CastleCalculator: FC<Props> = memo(({ className, getExtremePowerNode }) => {
  const [goalCastleLevel, setGoalCastleLevel] = useState<number | undefined>()

  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  const {
    mutate: calculatePossibleCastle,
    data: {
      oldParameters,
      parameters: newParameters,
      leftResources,
      spentResources,
      convertedSource,
      convertedTarget,
      spentBoxesResources,
      sourceResources,
    } = {},
    isSuccess: isCalculatingPossibleCastle,
  } = useCalculatePossibleCastle()

  const {
    mutate: calculateGoalCastle,
    data: goalCastleLevelData,
    isSuccess: isCalculatingGoalCastle,
    reset: resetCalculateGoalCastle,
  } = useCalculateGoalCastle()

  const handleCalculateButtonClick = useCallback(() => {
    calculatePossibleCastle({
      parameters,
      resources,
      settings,
    })

    const shouldCalculateGoalCastle =
      goalCastleLevel && !isNaN(goalCastleLevel) && goalCastleLevel > parameters.castle.level

    if (shouldCalculateGoalCastle) {
      calculateGoalCastle({
        resources,
        parameters,
        goalLevel: goalCastleLevel,
      })
    } else {
      resetCalculateGoalCastle()
    }
  }, [
    calculateGoalCastle,
    calculatePossibleCastle,
    goalCastleLevel,
    parameters,
    resetCalculateGoalCastle,
    resources,
    settings,
  ])

  return (
    <Flexbox className={cx(css.root, className)} gap={24} flexDirection="column">
      <Inputs
        goalCastleLevel={goalCastleLevel}
        setGoalCastleLevel={setGoalCastleLevel}
        onCalculateButtonClick={handleCalculateButtonClick}
      />
      {isCalculatingPossibleCastle && (
        <ResultsPossible
          oldParameters={oldParameters}
          parameters={newParameters}
          sourceResources={sourceResources}
          spentResources={spentResources}
          leftResources={leftResources}
          convertedSource={convertedSource}
          convertedTarget={convertedTarget}
          spentBoxes={spentBoxesResources}
          extremePowerPossibleNode={spentResources && getExtremePowerNode(spentResources)}
        />
      )}
      {isCalculatingGoalCastle && (
        <ResultsGoal
          goalCastleLevelData={goalCastleLevelData}
          extremePowerGoalNode={goalCastleLevelData && getExtremePowerNode(goalCastleLevelData.requiredResources)}
        />
      )}
    </Flexbox>
  )
})

export default CastleCalculator
