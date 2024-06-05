import React, { FC, ReactNode, memo, useCallback, useState } from 'react'
import cx from 'classnames'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { useSettings } from 'entities/calculationSettings'
import { useCalculateGoalCastle, useCalculatePossibleCastle } from 'entities/castle'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import Flexbox from 'shared/ui/Flexbox'
import Inputs from '../Inputs'
import ResultsPossible from '../Results'
import ResultsGoal from '../ResultsGoal'
import css from './styles.module.sass'


interface Props {
  className?: string
  getExtremePowerNode: (resources: ResourcesData) => ReactNode
}

const CastleCalculator: FC<Props> = memo(({ className, getExtremePowerNode }) => {
  const [goalCastleLevel, setGoalCastleLevel] = useState<number | undefined>()

  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  const {
    mutate: calculatePossibleCastle,
    data: possibleData,
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
        settings,
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
      {possibleData && (
        <ResultsPossible
          oldParameters={possibleData.oldParameters}
          parameters={possibleData.parameters}
          sourceResources={possibleData.sourceResources}
          spentResources={possibleData.spentResources}
          leftResources={possibleData.leftResources}
          convertedSource={possibleData.convertedSource}
          convertedTarget={possibleData.convertedTarget}
          spentBoxes={possibleData.spentBoxesResources}
          extremePowerPossibleNode={getExtremePowerNode(possibleData.spentResources)}
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
