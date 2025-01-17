import ParameterIcon from '../ParameterIcon'
import { Text } from '@mantine/core'
import Flexbox from '@shared/ui/Flexbox'
import { FC, memo } from 'react'

interface Props {
  type: 'books' | 'crowns'
  value: number
  oldValue: number
}

const BarracksTalentInfo: FC<Props> = memo(({ type, value, oldValue }) => {
  return (
    <Flexbox alignItems="center" gap={4}>
      <ParameterIcon parameterType={type === 'books' ? 'talentParams_books' : 'talentParams_crowns'} />
      {oldValue !== value ? (
        <Text w={65}>
          {oldValue} &#8594; {value}
        </Text>
      ) : (
        <Text w={65}>{value}</Text>
      )}
    </Flexbox>
  )
})

export default BarracksTalentInfo
