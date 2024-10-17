import { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import type { Ranks } from 'kg-calculator-typings'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'


interface Props {
  className?: string
  rank: Ranks
}

const RankIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, rank }, ref) => (
    <Flexbox className={cx(css.background, className, css[rank])} justifyContent="center" alignItems="center" ref={ref}>
      <div className={css.icon} />
    </Flexbox>
  )),
)

export default RankIcon