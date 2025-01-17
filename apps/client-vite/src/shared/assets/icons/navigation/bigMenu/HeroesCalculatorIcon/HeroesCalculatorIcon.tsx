import { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import Flexbox from '../../../../../ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  className?: string
}

const HeroesCalculatorIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className }, ref) => (
    <Flexbox className={cx(css.background, className)} justifyContent="center" alignItems="center" ref={ref}>
      <div className={css.icon} />
    </Flexbox>
  )),
)

export default HeroesCalculatorIcon
