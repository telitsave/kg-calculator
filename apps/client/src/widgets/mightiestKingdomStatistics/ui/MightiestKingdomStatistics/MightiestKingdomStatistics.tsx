import React, { FC, memo } from 'react'
import { MightiestKingdomTotal } from 'entities/mightiestKingdom'
import { Resources } from 'shared/api'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateMightiestKingdom from '../../model/hooks/useCalculateMightiestKingdom'

interface Props {
  className?: string
  spentResources: Partial<Resources>
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
