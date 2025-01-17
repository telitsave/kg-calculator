import css from './styles.module.sass'
import Flexbox from '@shared/ui/Flexbox'
import cx from 'classnames'
import { FC, forwardRef, memo } from 'react'

interface Props {
  className?: string
  hero: string
  small?: boolean
  disabled?: boolean
}

const HeroIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, hero, small = false, disabled = false }, ref) => (
    <Flexbox
      className={cx(css.background, className, css[hero], { [css.small]: small, [css.disabled]: disabled })}
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      <div className={css.icon} />
    </Flexbox>
  )),
)

export default HeroIcon
