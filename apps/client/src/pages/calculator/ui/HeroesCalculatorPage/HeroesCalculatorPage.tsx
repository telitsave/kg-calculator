import { FC, memo, useCallback } from 'react'
import cx from 'classnames'
import type { ResourcesData } from 'kg-calculator-typings'
import { ExtremePowerStatistics } from 'widgets/extremePowerStatistics'
import { HeroesCalculator } from 'widgets/heroesCalculator'
import { MightiestKingdomStatistics } from 'widgets/mightiestKingdomStatistics'
import css from './styles.module.sass'

interface Props {
  className?: string
}

const HeroesCalculatorPage: FC<Props> = memo(({ className }) => {
  const getExtremePowerNode = useCallback(
    (spentResources: ResourcesData) => <ExtremePowerStatistics spentResources={spentResources} />,
    [],
  )
  const getMightiestKingdomNode = useCallback(
    (spentResources: ResourcesData) => <MightiestKingdomStatistics spentResources={spentResources} />,
    [],
  )
  return (
    <HeroesCalculator
      className={cx(css.root, className)}
      getMightiestKingdomNode={getMightiestKingdomNode}
      getExtremePowerNode={getExtremePowerNode}
    />
  )
})

export default HeroesCalculatorPage
