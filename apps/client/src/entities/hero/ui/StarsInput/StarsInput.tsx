import { FC, memo, useCallback, useState } from 'react'
import { Combobox, Flex, Rating } from '@mantine/core'

interface Props {
  className?: string
}

const StarsInput: FC<Props> = memo(({ className }) => {
  const [rating, setRating] = useState(0)
  const handleRatingChange = useCallback((value: number) => {
    if (value === rating) {
      setRating(0)
    } else {
      setRating(value)
    }
  }, [])
  const handleClear = useCallback(() => {
    setRating(0)
  }, [])
  return (
    <Flex className={className} align="center">
      <Combobox.ClearButton onClear={handleClear} />
      <Rating value={rating} onChange={handleRatingChange} size="xl" />
    </Flex>
  )
})

export default StarsInput
