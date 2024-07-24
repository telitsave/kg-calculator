import React, { FC, memo, useCallback, useState } from 'react'
import { Slider } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  className?: string
}

const BarsInput: FC<Props> = memo(({ className }) => {
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
    <Flexbox className={className}>
      <Slider w={112} value={rating} onChange={handleRatingChange} min={0} max={5} />
    </Flexbox>
  )
})

export default BarsInput
