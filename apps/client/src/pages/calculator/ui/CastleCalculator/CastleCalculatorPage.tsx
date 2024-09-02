import { FC, memo, useCallback } from 'react'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { CastleCalculator } from 'widgets/castleCalculator'
import { ExtremePowerStatistics } from 'widgets/extremePowerStatistics'


const CastleCalculatorPage: FC = memo(() => {
  const getExtremePowerNode = useCallback(
    (spentResources: ResourcesData) => <ExtremePowerStatistics spentResources={spentResources} />,
    [],
  )

  return <CastleCalculator getExtremePowerNode={getExtremePowerNode} />
})

export default CastleCalculatorPage
