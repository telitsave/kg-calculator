import React, { FC, memo } from 'react'
import { MightiestKingdomTotal } from 'entities/mightiestKingdom'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateTotalMightiestKingdom from '../../model/hooks/useCalculateTotalMightiestKingdom'


const MightiestKingdomStatisticsTotal: FC = memo(() => {
  const { data } = useCalculateTotalMightiestKingdom()
  return (
    <Flexbox flexDirection="column" gap={8}>
      <MightiestKingdomTotal data={data} showEmpty />
    </Flexbox>
  )
})

export default MightiestKingdomStatisticsTotal
