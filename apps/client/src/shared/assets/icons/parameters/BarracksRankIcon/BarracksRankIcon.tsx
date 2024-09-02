import { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  className?: string
  element: 'bow' | 'fire' | 'ice' | 'poison'
  rank: number
}

const BarracksRankIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, element, rank }, ref) => (
    <Flexbox
      className={cx(css.background, className, css[`element-${element}`])}
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      <div className={cx(css.icon, css[`rank-${rank}`])} />
    </Flexbox>
  )),
)

export default BarracksRankIcon
