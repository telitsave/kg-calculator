import React, { FC, memo } from 'react'
import cx from 'classnames'
import { FaStar } from 'react-icons/fa'
import css from './styles.module.sass'


interface Props {
  className?: string
  classNameStar?: string
  starsCount: number
  oldValue: number
  newValue?: number
}

const Stars: FC<Props> = memo(({ className, classNameStar, starsCount, oldValue, newValue = oldValue }) => (
  <div className={className}>
    {Array.from({ length: starsCount }).map((_, index) => (
      <FaStar
        key={index}
        className={cx(css.star, classNameStar)}
        color={
          index < oldValue
            ? 'var(--mantine-color-yellow-filled)'
            : index >= oldValue && index < newValue
              ? 'var(--mantine-color-green-filled)'
              : 'var(--mantine-color-gray-3)'
        }
      />
    ))}
  </div>
))

export default Stars
