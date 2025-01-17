import { FC, memo } from 'react'
import { Flex } from '@mantine/core'
import type { CalculateUltimatePowerResponse } from 'kg-calculator-typings'
import UltimatePowerTotal from '../UltimatePowerTotal'


interface Props {
  data?: CalculateUltimatePowerResponse
  showEmpty?: boolean
}

const UltimatePowerStatistics: FC<Props> = memo(({ data, showEmpty = false }) => {
  return (
    <Flex direction="column" gap={8}>
      <UltimatePowerTotal data={data} showEmpty={showEmpty} />
    </Flex>
  )
})

export default UltimatePowerStatistics
