import { FC, memo } from 'react'
import { Flex } from '@mantine/core'
import type { CalculateMightiestKingdomResponse } from 'kg-calculator-typings'
import MightiestKingdomTotal from '../MightiestKingdomTotal'


interface Props {
  data?: CalculateMightiestKingdomResponse
  showEmpty?: boolean
}

const MightiestKingdomStatistics: FC<Props> = memo(({ data, showEmpty = false }) => {
  return (
    <Flex direction="column" gap={8}>
      <MightiestKingdomTotal data={data} showEmpty={showEmpty} />
    </Flex>
  )
})

export default MightiestKingdomStatistics
