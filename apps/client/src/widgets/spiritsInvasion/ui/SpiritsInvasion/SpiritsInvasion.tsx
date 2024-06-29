import React, { FC, memo, useCallback } from 'react'
import { Flex } from '@mantine/core'
import useGetSpiritsInvasionData from '../../model/hooks/useGetSpiritsInvasionData'
import DetailsResultsTable from '../DetailsResultsTable'
import Inputs from '../Inputs'
import ShortResults from '../ShortResults'


interface Props {
  className?: string
}

const SpiritsInvasion: FC<Props> = memo(({ className }) => {
  const { mutate, data } = useGetSpiritsInvasionData()

  const handleInputsClickShow = useCallback((level: number, membersCount: number) => {
    mutate({
      level,
      membersCount,
    })
  }, [])

  return (
    <Flex className={className} direction="column" gap={16}>
      <Inputs onClickShow={handleInputsClickShow} />
      {data && <ShortResults data={data.shortData} />}
      {data && <DetailsResultsTable data={data.tableData} />}
    </Flex>
  )
})

export default SpiritsInvasion
