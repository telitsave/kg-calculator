import { FC, memo } from 'react'
import cx from 'classnames'
import { BarracksCalculator } from 'widgets/barracksCalculator'
import css from './styles.module.sass'


interface Props {
  className?: string
}

const BarracksCalculatorPage: FC<Props> = memo(({ className }) => {
  return <BarracksCalculator className={cx(css.root, className)} />
})

export default BarracksCalculatorPage
