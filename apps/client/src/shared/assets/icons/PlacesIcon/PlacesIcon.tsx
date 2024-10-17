import { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import Flexbox from 'shared/ui/Flexbox'
import css from './styles.module.sass'

interface Props {
  className?: string
  placeId: number
}

const PlacesIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, placeId }, ref) => (
    <Flexbox
      className={cx(css.background, className, css[`place${placeId}`])}
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      <div className={css.icon} />
    </Flexbox>
  )),
)

export default PlacesIcon
