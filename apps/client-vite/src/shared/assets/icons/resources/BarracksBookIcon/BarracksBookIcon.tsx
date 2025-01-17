import css from './styles.module.sass'
import Flexbox from '@shared/ui/Flexbox'
import cx from 'classnames'
import { FC, forwardRef, memo } from 'react'

interface Props {
  className?: string
  element: 'bow' | 'fire' | 'ice' | 'poison' | 'random'
  rank: 'rank1' | 'rank2' | 'rank3' | 'rank4'
}

const BarracksBookIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, element, rank }, ref) => (
    <Flexbox
      className={cx(css.background, className, {
        [css[rank]]: element !== 'random',
        [css.random]: element === 'random',
      })}
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      <div className={cx(css.icon, css[`element-${element}`])} />
    </Flexbox>
  )),
)

export default BarracksBookIcon
