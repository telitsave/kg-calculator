import { FC, memo, useCallback } from 'react'
import { NumberInput } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import Flexbox from 'shared/ui/Flexbox'
import ParameterIcon from '../ParameterIcon'


interface Props {
  element: ElementsType
  rank: number
  type: 'big' | 'small'
  value: number
  onChange: (rank: number, type: 'big' | 'small', value: number) => void
}

const BarracksTalentInput: FC<Props> = memo(({ element, rank, type, value, onChange }) => {
  const handleNumberInputChange = useCallback(
    (val: string | number) => {
      onChange(rank, type, Number(val) || 0)
    },
    [rank, type, onChange],
  )

  return (
    <Flexbox alignItems="center" gap={4}>
      <NumberInput
        name={`talent-${element}-${rank}-${type}`}
        w={100}
        min={0}
        max={type === 'small' ? 48 : 6}
        leftSection={<ParameterIcon parameterType={type === 'small' ? 'talentParams_books' : 'talentParams_crowns'} />}
        value={value}
        onChange={handleNumberInputChange}
      />
    </Flexbox>
  )
})

export default BarracksTalentInput
