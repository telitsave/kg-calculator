import { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

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
