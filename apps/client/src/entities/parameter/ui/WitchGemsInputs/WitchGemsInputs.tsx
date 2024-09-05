import { FC, memo, useCallback, useState } from 'react'
import { ScrollArea, SegmentedControl } from '@mantine/core'
import Flexbox from 'shared/ui/Flexbox'
import WitchGemInput from '../WitchGemInput'


interface Props {
  className?: string
  maxRank: number
}

const WitchGemsInputs: FC<Props> = memo(({ className, maxRank }) => {
  const [value, setValue] = useState<string>('1')

  const handleSegmentedControlChange = useCallback(
    (value: string) => {
      setValue(value)
    },
    [setValue],
  )

  return (
    <div className={className}>
      <ScrollArea>
        <SegmentedControl
          data={Array.from({ length: maxRank }).map((_, index) => ({
            label: `Ранг ${index + 1}`,
            value: (index + 1).toString(),
          }))}
          mb={8}
          value={value}
          onChange={handleSegmentedControlChange}
        />
      </ScrollArea>
      <Flexbox flexWrap="wrap" gap={8}>
        <WitchGemInput key={`gem-${value}-sapphire`} rank={Number(value)} gem="sapphire" />
        <WitchGemInput key={`gem-${value}-amethyst`} rank={Number(value)} gem="amethyst" />
        <WitchGemInput key={`gem-${value}-ruby`} rank={Number(value)} gem="ruby" />
        <WitchGemInput key={`gem-${value}-amber`} rank={Number(value)} gem="amber" />
        <WitchGemInput key={`gem-${value}-malachite`} rank={Number(value)} gem="malachite" />
        <WitchGemInput key={`gem-${value}-emerald`} rank={Number(value)} gem="emerald" />
      </Flexbox>
    </div>
  )
})

export default WitchGemsInputs
