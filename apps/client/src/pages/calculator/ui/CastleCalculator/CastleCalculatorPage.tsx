import React, { FC, memo, useCallback } from 'react'
import { Resources } from 'shared/api'
import { CastleCalculator } from 'widgets/castleCalculator'
import { ExtremePowerStatistics } from 'widgets/extremePowerStatistics'

interface Props {
  className?: string
}

const CastleCalculatorPage: FC<Props> = memo(({ className }) => {
  const getExtremePowerNode = useCallback(
    (spentResources: Resources) => <ExtremePowerStatistics spentResources={spentResources} />,
    [],
  )

  return <CastleCalculator getExtremePowerNode={getExtremePowerNode} />
})

export default CastleCalculatorPage
