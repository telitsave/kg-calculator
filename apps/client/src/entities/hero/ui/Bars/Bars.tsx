import React, { FC, memo } from 'react'
import cx from 'classnames'
import { Flex } from '@mantine/core'
import type { Ranks } from 'kg-calculator-typings'
import HeroHelper from '../../libs/HeroHelper'
import css from './styles.module.sass'


interface Props {
  className?: string
  rank: Ranks
  stars: number
  value: number
}

const Bars: FC<Props> = memo(({ className, rank, stars, value }) => {
  const maxBars = HeroHelper.getMaxBars(rank, stars)

  if (maxBars === 0) return null

  return (
    <Flex className={className}>
      {Array.from({ length: maxBars }).map((_, index) => (
        <div className={cx(css.bar, { [css.active]: index < value })} />
      ))}
    </Flex>
  )
})

export default Bars
