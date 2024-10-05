import { FC, memo, useCallback, useState } from 'react'
import { Flex, SegmentedControl } from '@mantine/core'
import WitchGemInfo from '../WitchGemInfo'

interface Props {
  className?: string
  gemsParams: Record<string, number>
  oldGemsParams: Record<string, number>
  maxRank: number
}

const WitchGemsInfo: FC<Props> = memo(({ className, gemsParams, oldGemsParams, maxRank }) => {
  const [value, setValue] = useState<string>('1')

  const handleSegmentedControlChange = useCallback((value: string | null) => {
    if (!value) {
      setValue('1')
    } else {
      setValue(value)
    }
  }, [])

  return (
    <Flex className={className}>
      <SegmentedControl
        data={Array.from({ length: maxRank }).map((_, index) => ({
          label: `Ранг ${index + 1}`,
          value: (index + 1).toString(),
        }))}
        mb={8}
        value={value}
        onChange={handleSegmentedControlChange}
        orientation="vertical"
        flex="1 0 auto"
      />
      <Flex wrap="wrap" gap={8}>
        <WitchGemInfo
          key={`gem-${value}-sapphire`}
          rank={Number(value)}
          gem="sapphire"
          value={gemsParams[`${value}_sapphire`]}
          oldValue={oldGemsParams[`${value}_sapphire`]}
        />
        <WitchGemInfo
          key={`gem-${value}-amethyst`}
          rank={Number(value)}
          gem="amethyst"
          value={gemsParams[`${value}_amethyst`]}
          oldValue={oldGemsParams[`${value}_amethyst`]}
        />
        <WitchGemInfo
          key={`gem-${value}-ruby`}
          rank={Number(value)}
          gem="ruby"
          value={gemsParams[`${value}_ruby`]}
          oldValue={oldGemsParams[`${value}_ruby`]}
        />
        <WitchGemInfo
          key={`gem-${value}-amber`}
          rank={Number(value)}
          gem="amber"
          value={gemsParams[`${value}_amber`]}
          oldValue={oldGemsParams[`${value}_amber`]}
        />
        <WitchGemInfo
          key={`gem-${value}-malachite`}
          rank={Number(value)}
          gem="malachite"
          value={gemsParams[`${value}_malachite`]}
          oldValue={oldGemsParams[`${value}_malachite`]}
        />
        <WitchGemInfo
          key={`gem-${value}-emerald`}
          rank={Number(value)}
          gem="emerald"
          value={gemsParams[`${value}_emerald`]}
          oldValue={oldGemsParams[`${value}_emerald`]}
        />
      </Flex>
    </Flex>
  )
})

export default WitchGemsInfo
