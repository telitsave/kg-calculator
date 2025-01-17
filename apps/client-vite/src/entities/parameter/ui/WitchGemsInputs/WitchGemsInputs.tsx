import { FC, memo, useCallback, useState } from 'react'
import { Flex, SegmentedControl } from '@mantine/core'
import { FormattedMessage } from 'react-intl'
import Flexbox from '@shared/ui/Flexbox'
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
    <Flex className={className}>
      <SegmentedControl
        data={Array.from({ length: maxRank }).map((_, index) => ({
          label: <FormattedMessage defaultMessage="Ранг {rank}" values={{ rank: index + 1 }} />,
          value: (index + 1).toString(),
        }))}
        mb={8}
        value={value}
        onChange={handleSegmentedControlChange}
        orientation="vertical"
        flex="1 0 auto"
        styles={{
          control: {
            flex: '0 0 auto',
          },
        }}
      />
      <Flexbox flexWrap="wrap" gap={8}>
        <WitchGemInput key={`gem-${value}-sapphire`} rank={Number(value)} gem="sapphire" />
        <WitchGemInput key={`gem-${value}-amethyst`} rank={Number(value)} gem="amethyst" />
        <WitchGemInput key={`gem-${value}-ruby`} rank={Number(value)} gem="ruby" />
        <WitchGemInput key={`gem-${value}-amber`} rank={Number(value)} gem="amber" />
        <WitchGemInput key={`gem-${value}-malachite`} rank={Number(value)} gem="malachite" />
        <WitchGemInput key={`gem-${value}-emerald`} rank={Number(value)} gem="emerald" />
      </Flexbox>
    </Flex>
  )
})

export default WitchGemsInputs
