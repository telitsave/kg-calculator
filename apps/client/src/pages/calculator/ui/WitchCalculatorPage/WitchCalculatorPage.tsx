import React, { FC, memo, useCallback } from 'react'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { ExtremePowerStatistics } from 'widgets/extremePowerStatistics'
import { MightiestKingdomStatistics } from 'widgets/mightiestKingdomStatistics'
import { WitchCalculator } from 'widgets/witchCalculator'


interface Props {
  className?: string
}

const WitchCalculatorPage: FC<Props> = memo(({ className }) => {
  const getExtremePowerNode = useCallback(
    (spentResources: ResourcesData) => <ExtremePowerStatistics spentResources={spentResources} />,
    [],
  )
  const getMightiestKingdomNode = useCallback(
    (spentResources: ResourcesData) => <MightiestKingdomStatistics spentResources={spentResources} />,
    [],
  )

  return <WitchCalculator getExtremePowerNode={getExtremePowerNode} getMightiestKingdomNode={getMightiestKingdomNode} />
})

export default WitchCalculatorPage
