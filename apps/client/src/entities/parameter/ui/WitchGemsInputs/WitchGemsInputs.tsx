import React, { FC, memo, useCallback, useState } from 'react'
import { ScrollArea, SegmentedControl } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'
import { Ranks } from '../../model/types'
import WitchGemInput from '../WitchGemInput'


interface Props {
  className?: string
  maxRank: number
}

const WitchGemsInputs: FC<Props> = memo(({ className, maxRank }) => {
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
        <WitchGemInput key={`gem-${value}-${1}`} rank={value} gem={1} />
        <WitchGemInput key={`gem-${value}-${2}`} rank={value} gem={2} />
        <WitchGemInput key={`gem-${value}-${3}`} rank={value} gem={3} />
        <WitchGemInput key={`gem-${value}-${4}`} rank={value} gem={4} />
        <WitchGemInput key={`gem-${value}-${5}`} rank={value} gem={5} />
        <WitchGemInput key={`gem-${value}-${6}`} rank={value} gem={6} />
      </Flexbox>
    </div>
  )
})

export default WitchGemsInputs
