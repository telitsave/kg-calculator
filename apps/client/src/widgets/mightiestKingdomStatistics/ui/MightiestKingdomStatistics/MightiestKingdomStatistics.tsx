import React, { FC, memo } from 'react'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { MightiestKingdomTotal } from 'entities/mightiestKingdom'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateMightiestKingdom from '../../model/hooks/useCalculateMightiestKingdom'


interface Props {
  className?: string
  spentResources: ResourcesData
}

const MightiestKingdomStatistics: FC<Props> = memo(({ className, spentResources }) => {
  const { data } = useCalculateMightiestKingdom(spentResources)

  return (
    <Flexbox flexDirection="column" gap={8}>
      <MightiestKingdomTotal data={data} />
    </Flexbox>
  )
})

export default MightiestKingdomStatistics
