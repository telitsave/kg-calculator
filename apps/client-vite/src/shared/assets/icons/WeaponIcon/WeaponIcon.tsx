import { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import Flexbox from '@shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  className?: string
  rank: number
  small?: boolean
}

const WeaponIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, rank }, ref) => (
    <Flexbox
      className={cx(css.background, className, css[`t${rank}`])}
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      <div className={cx(css.icon)} />
    </Flexbox>
  )),
)

export default WeaponIcon
