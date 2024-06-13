import React, { FC, memo, useCallback, useState } from 'react'
import { Combobox, Rating } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'

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
    <Flexbox className={className}>
      <Combobox.ClearButton onClear={handleClear} />
      <Rating value={rating} onChange={handleRatingChange} />
    </Flexbox>
  )
})

export default StarsInput
