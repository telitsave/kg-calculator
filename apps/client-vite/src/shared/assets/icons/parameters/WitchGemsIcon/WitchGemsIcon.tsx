import { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import { Overlay } from '@mantine/core'
import Flexbox from '@shared/ui/Flexbox'
import css from './styles.module.sass'


interface Props {
  className?: string
  rank: number
  gem: string
  faded?: boolean
  small?: boolean
}

const WitchGemsIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, rank, gem, faded = false, small = false }, ref) => (
    <Flexbox
      className={cx(css.background, className, css[`rank${rank}`], { [css.small]: small })}
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
