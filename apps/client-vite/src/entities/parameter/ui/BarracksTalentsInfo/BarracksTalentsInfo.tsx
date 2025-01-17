import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import Flexbox from '@shared/ui/Flexbox'
import BarracksTalentInfo from '../BarracksTalentInfo'


interface Props {
  className?: string
  element: ElementsType
  oldTalentParams: Record<string, number>
  newTalentParams: Record<string, number>
  maxRank: number
}

const BarracksTalentsInfo: FC<Props> = memo(({ className, element, newTalentParams, oldTalentParams, maxRank }) => (
  <Flexbox className={className} flexDirection="column">
    {Array.from({ length: maxRank }).map((_, index) => (
      <Flexbox key={index} alignItems="center" gap={4}>
        <Text>
          <FormattedMessage defaultMessage="Ранг {rank}:" values={{ rank: index + 1 }} />
        </Text>
        <BarracksTalentInfo
          key={`talent-${element}-${index + 1}-books`}
          type="books"
          value={newTalentParams[`${element}_${index + 1}_small`]}
          oldValue={oldTalentParams[`${element}_${index + 1}_small`]}
        />
        <BarracksTalentInfo
          key={`talent-${element}-${index + 1}-crowns`}
          type="crowns"
          value={newTalentParams[`${element}_${index + 1}_big`]}
          oldValue={oldTalentParams[`${element}_${index + 1}_big`]}
        />
      </Flexbox>
    ))}
  </Flexbox>
))

export default BarracksTalentsInfo
