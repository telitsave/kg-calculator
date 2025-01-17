import css from './styles.module.sass'
import Flexbox from '@shared/ui/Flexbox'
import cx from 'classnames'
import { FC, forwardRef, memo } from 'react'

interface Props {
  className?: string
  element: 'bow' | 'fire' | 'ice' | 'poison'
  small?: boolean
}

const ElementIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, element, small = false }, ref) => (
    <Flexbox
      className={cx(css.background, className, { [css.small]: small })}
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      <div className={cx(css.icon, css[element])} />
    </Flexbox>
  )),
)

export default ElementIcon
