import { FC, memo, useCallback } from 'react'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { DragonCalculator } from 'widgets/dragonCalculator'
import { ExtremePowerStatistics } from 'widgets/extremePowerStatistics'
import { MightiestKingdomStatistics } from 'widgets/mightiestKingdomStatistics'


const DragonCalculatorPage: FC = memo(() => {
  const getExtremePowerNode = useCallback(
    (spentResources: ResourcesData) => <ExtremePowerStatistics spentResources={spentResources} />,
    [],
  )
  const getMightiestKingdomNode = useCallback(
    (spentResources: ResourcesData) => <MightiestKingdomStatistics spentResources={spentResources} />,
    [],
  )

  return (
    <DragonCalculator getExtremePowerNode={getExtremePowerNode} getMightiestKingdomNode={getMightiestKingdomNode} />
  )
})

export default DragonCalculatorPage
