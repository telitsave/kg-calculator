import css from './styles.module.sass'
import Flexbox from '@shared/ui/Flexbox'
import cx from 'classnames'
import { FC, forwardRef, memo } from 'react'

interface Props {
  className?: string
}

const TalentBookIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className }, ref) => (
    <Flexbox className={cx(css.background, className)} justifyContent="center" alignItems="center" ref={ref}>
      <div className={css.icon} />
    </Flexbox>
  )),
)

export default TalentBookIcon
