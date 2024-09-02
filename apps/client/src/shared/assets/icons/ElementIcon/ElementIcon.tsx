import { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  className?: string
  element: 'bow' | 'fire' | 'ice' | 'poison'
}

const ElementIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, element }, ref) => (
    <Flexbox className={cx(css.background, className)} justifyContent="center" alignItems="center" ref={ref}>
      <div className={cx(css.icon, css[element])} />
    </Flexbox>
  )),
)

export default ElementIcon
