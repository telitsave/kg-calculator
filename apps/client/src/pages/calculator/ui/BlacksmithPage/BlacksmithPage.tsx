import React, { FC, memo, useCallback } from 'react'
import cx from 'classnames'
import { Resources } from 'shared/api'
import { BlacksmithCalculator } from 'widgets/blacksmithCalculator'
import { ExtremePowerStatistics } from 'widgets/extremePowerStatistics'
import { MightiestKingdomStatistics } from 'widgets/mightiestKingdomStatistics'
import css from './styles.module.sass'

interface Props {
  className?: string
}

const BlacksmithPage: FC<Props> = memo(({ className }) => {
  const getExtremePowerNode = useCallback(
    (spentResources: Partial<Resources>) => <ExtremePowerStatistics spentResources={spentResources} />,
    [],
  )
  const getMightiestKingdomNode = useCallback(
    (spentResources: Partial<Resources>) => <MightiestKingdomStatistics spentResources={spentResources} />,
    [],
  )
  return (
    <BlacksmithCalculator
      className={cx(css.root, className)}
      getMightiestKingdomNode={getMightiestKingdomNode}
      getExtremePowerNode={getExtremePowerNode}
    />
  )
})

export default BlacksmithPage
