import { FC, memo, useCallback } from 'react'
import { NumberInput } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import Flexbox from 'shared/ui/Flexbox'
import useTalentParameter from '../../model/hooks/useTalentParameter'
import ParameterIcon from '../ParameterIcon'

interface Props {
  element: ElementsType
  rank: string
  type: 'books' | 'crowns'
}

const BarracksTalentInput: FC<Props> = memo(({ element, rank, type }) => {
  const [value, setValue] = useTalentParameter(element, rank, type)

  const handleNumberInputChange = useCallback(
    (value: string | number) => {
      setValue(parseInt(value.toString(), 10) || 0)
    },
    [setValue],
  )

  return (
    <Flexbox alignItems="center" gap={4}>
      <NumberInput
        name={`talent-${element}-${rank}-${type}`}
        w={100}
        min={0}
        max={type === 'books' ? 48 : 6}
        leftSection={<ParameterIcon parameterType={type === 'books' ? 'talentBooks' : 'talentCrowns'} />}
        value={value}
        onChange={handleNumberInputChange}
      />
    </Flexbox>
  )
})

export default BarracksTalentInput
