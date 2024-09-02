import { FC, memo } from 'react'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import { ExtremePowerTotal } from 'entities/extremePower'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateExtremePower from '../../model/hooks/useCalculateExtremePower'


interface Props {
  spentResources: ResourcesData
}

const ExtremePowerStatistics: FC<Props> = memo(({ spentResources }) => {
  const { data: extremePower } = useCalculateExtremePower(spentResources)

  return (
    <Flexbox flexDirection="column" gap={8}>
      <ExtremePowerTotal data={extremePower} />
    </Flexbox>
  )
})

export default ExtremePowerStatistics
