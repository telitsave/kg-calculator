import { FC, memo } from 'react'
import cx from 'classnames'
import { Flex } from '@mantine/core'
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
  <Flex className={className} wrap="nowrap">
    {Array.from({ length: starsCount }).map((_, index) => (
      <div className={css.starBlock}>
        <FaStar
          key={index}
          className={cx(css.star, classNameStar)}
          width="100%"
          height="100%"
          color={
            index < oldValue
              ? 'var(--mantine-color-yellow-filled)'
              : index >= oldValue && index < newValue
                ? 'var(--mantine-color-green-filled)'
                : 'var(--mantine-color-gray-3)'
          }
        />
      </div>
    ))}
  </Flex>
))

export default Stars
