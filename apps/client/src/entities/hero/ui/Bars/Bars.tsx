import React, { FC, memo } from 'react'
import cx from 'classnames'
import { Flex } from '@mantine/core'
import css from './styles.module.sass'


interface Props {
  className?: string
  barsCount: number
  oldValue: number
  newValue?: number
}

const Bars: FC<Props> = memo(({ className, barsCount, oldValue, newValue = oldValue }) => {
  return (
    <Flex className={className}>
      {Array.from({ length: barsCount }).map((_, index) => (
        <div
          className={cx(css.bar, {
            [css.yellow]: index < oldValue,
            [css.green]: index >= oldValue && index < newValue,
          })}
          key={index}
        />
      ))}
    </Flex>
  )
})

export default Bars
