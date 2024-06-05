import React, { FC, forwardRef, memo } from 'react'
import cx from 'classnames'
import { Overlay } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'
import { WitchParameters } from '../../../../api'
import css from './styles.module.sass'

interface Props {
  className?: string
  rank: keyof WitchParameters['gems']
  gem: number
  faded?: boolean
}

const WitchGemsIcon: FC<Props> = memo(
  forwardRef<HTMLDivElement, Props>(({ className, rank, gem, faded = false }, ref) => (
    <Flexbox className={cx(css.background, className, css[rank])} justifyContent="center" alignItems="center" ref={ref}>
      <div className={cx(css.icon, css[`gem-${gem}`])} />
      {faded && <Overlay color="#000" backgroundOpacity={0.5} />}
    </Flexbox>
  )),
)

export default WitchGemsIcon
