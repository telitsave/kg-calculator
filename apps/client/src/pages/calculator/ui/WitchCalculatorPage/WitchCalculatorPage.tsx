import React, { FC, memo, useCallback } from 'react'
import { Resources } from 'shared/api'
import { ExtremePowerStatistics } from 'widgets/extremePowerStatistics'
import { MightiestKingdomStatistics } from 'widgets/mightiestKingdomStatistics'
import { WitchCalculator } from 'widgets/witchCalculator'

interface Props {
  className?: string
}

const WitchCalculatorPage: FC<Props> = memo(({ className }) => {
  const getExtremePowerNode = useCallback(
    (spentResources: Partial<Resources>) => <ExtremePowerStatistics spentResources={spentResources} />,
    [],
  )
  const getMightiestKingdomNode = useCallback(
    (spentResources: Partial<Resources>) => <MightiestKingdomStatistics spentResources={spentResources} />,
    [],
  )

  return <WitchCalculator getExtremePowerNode={getExtremePowerNode} getMightiestKingdomNode={getMightiestKingdomNode} />
})

export default WitchCalculatorPage
