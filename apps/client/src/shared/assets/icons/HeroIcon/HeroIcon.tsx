import React, { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  className?: string
  hero: string
  small?: boolean
}

const HeroIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, hero, small = false }, ref) => (
    <Flexbox
      className={cx(css.background, className, css[hero], { [css.small]: small })}
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      <div className={css.icon} />
    </Flexbox>
  )),
)

export default HeroIcon
