import React, { FC, memo } from 'react'
import { Text } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'
import ParameterIcon from '../ParameterIcon'

interface Props {
  type: 'books' | 'crowns'
  value: number
  oldValue: number
}

const BarracksTalentInfo: FC<Props> = memo(({ type, value, oldValue }) => {
  return (
    <Flexbox alignItems="center" gap={4}>
      <ParameterIcon parameterType={type === 'books' ? 'talentBooks' : 'talentCrowns'} />
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
