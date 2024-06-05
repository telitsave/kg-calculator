import React, { FC, memo, useCallback } from 'react'
import { Resources } from 'shared/api'
import { DragonCalculator } from 'widgets/dragonCalculator'
import { ExtremePowerStatistics } from 'widgets/extremePowerStatistics'
import { MightiestKingdomStatistics } from 'widgets/mightiestKingdomStatistics'

interface Props {
  className?: string
}

const DragonCalculatorPage: FC<Props> = memo(({ className }) => {
  const getExtremePowerNode = useCallback(
    (spentResources: Partial<Resources>) => <ExtremePowerStatistics spentResources={spentResources} />,
    [],
  )
  const getMightiestKingdomNode = useCallback(
    (spentResources: Partial<Resources>) => <MightiestKingdomStatistics spentResources={spentResources} />,
    [],
  )

  return (
    <DragonCalculator getExtremePowerNode={getExtremePowerNode} getMightiestKingdomNode={getMightiestKingdomNode} />
  )
})

export default DragonCalculatorPage
