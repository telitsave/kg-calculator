import css from './styles.module.sass'
import { Overlay } from '@mantine/core'
import Flexbox from '@shared/ui/Flexbox'
import cx from 'classnames'
import { FC, forwardRef, memo } from 'react'

interface Props {
  className?: string
  rank: number
  gem: string
  faded?: boolean
}

const WitchGemsIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, rank, gem, faded = false }, ref) => (
    <Flexbox
      className={cx(css.background, className, css[`rank${rank}`])}
      justifyContent="center"
      alignItems="center"
      ref={ref}
    >
      <div className={cx(css.icon, css[`gem-${gem}`])} />
      {faded && <Overlay color="#000" backgroundOpacity={0.5} zIndex={90} />}
    </Flexbox>
  )),
)

export default WitchGemsIcon
