import { FC, memo, useCallback, useState } from 'react'
import { ScrollArea, SegmentedControl } from '@mantine/core'
import type { WitchParameters } from 'kg-calculator-typings/api/Witch'
import Flexbox from 'shared/ui/Flexbox'
import { Ranks } from '../../model/types'
import WitchGemInfo from '../WitchGemInfo'

interface Props {
  className?: string
  witchParameters: WitchParameters
  oldWitchParameters: WitchParameters
  maxRank: number
}

const WitchGemsInfo: FC<Props> = memo(({ className, witchParameters, oldWitchParameters, maxRank }) => {
  const [value, setValue] = useState<Ranks>('rank1')

  const handleSegmentedControlChange = useCallback((value: string) => {
    setValue(value as Ranks)
  }, [])

  return (
    <div className={className}>
      <ScrollArea>
        <SegmentedControl
          data={Array.from({ length: maxRank }).map((_, index) => ({
            label: `Ранг ${index + 1}`,
            value: `rank${index + 1}`,
          }))}
          mb={8}
          value={value}
          onChange={handleSegmentedControlChange}
        />
      </ScrollArea>
      <Flexbox flexWrap="wrap" gap={8}>
        <WitchGemInfo
          key={`gem-${value}-${1}`}
          rank={value}
          gem={1}
          value={witchParameters.gems[value].sapphire}
          oldValue={oldWitchParameters.gems[value].sapphire}
        />
        <WitchGemInfo
          key={`gem-${Number(value) + 1}-${2}`}
          rank={value}
          gem={2}
          value={witchParameters.gems[value].amethyst}
          oldValue={oldWitchParameters.gems[value].amethyst}
        />
        <WitchGemInfo
          key={`gem-${Number(value) + 1}-${3}`}
          rank={value}
          gem={3}
          value={witchParameters.gems[value].ruby}
          oldValue={oldWitchParameters.gems[value].ruby}
        />
        <WitchGemInfo
          key={`gem-${Number(value) + 1}-${4}`}
          rank={value}
          gem={4}
          value={witchParameters.gems[value].amber}
          oldValue={oldWitchParameters.gems[value].amber}
        />
        <WitchGemInfo
          key={`gem-${Number(value) + 1}-${5}`}
          rank={value}
          gem={5}
          value={witchParameters.gems[value].malachite}
          oldValue={oldWitchParameters.gems[value].malachite}
        />
        <WitchGemInfo
          key={`gem-${Number(value) + 1}-${6}`}
          rank={value}
          gem={6}
          value={witchParameters.gems[value].emerald}
          oldValue={oldWitchParameters.gems[value].emerald}
        />
      </Flexbox>
    </div>
  )
})

export default WitchGemsInfo
