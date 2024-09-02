import { FC, memo } from 'react'
import { ExtremePowerTotal } from 'entities/extremePower'
import Flexbox from 'shared/ui/Flexbox'
import useCalculateTotalExtremePower from '../../model/hooks/useCalculateTotalExtremePower'

const ExtremePowerStatisticsTotal: FC = memo(() => {
  const { data: extremePower } = useCalculateTotalExtremePower()
  return (
    <Flexbox flexDirection="column" gap={8}>
      <ExtremePowerTotal data={extremePower} showEmpty />
    </Flexbox>
  )
})

export default ExtremePowerStatisticsTotal
