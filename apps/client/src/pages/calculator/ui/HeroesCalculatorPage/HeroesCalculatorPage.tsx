import { FC, memo } from 'react'
import cx from 'classnames'
import { HeroesCalculator } from 'widgets/heroesCalculator'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const HeroesCalculatorPage: FC<Props> = memo(({ className }) => {
  return <HeroesCalculator className={cx(css.root, className)} />
})

export default HeroesCalculatorPage
