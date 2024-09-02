import { FC, memo } from 'react'
import { Text } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import type { TalentsParameters } from 'kg-calculator-typings/api/Talents'
import Flexbox from 'shared/ui/Flexbox'
import BarracksTalentInfo from '../BarracksTalentInfo'

interface Props {
  className?: string
  element: ElementsType
  parameters: TalentsParameters
  oldParameters: TalentsParameters
  maxRank: number
}

const BarracksTalentsInfo: FC<Props> = memo(({ className, element, parameters, oldParameters, maxRank }) => (
  <Flexbox className={className} flexDirection="column">
    {Array.from({ length: maxRank }).map((_, index) => (
      <Flexbox alignItems="center" gap={4}>
        <Text>Ранг {index + 1}:</Text>
        <BarracksTalentInfo
          key={`talent-${element}-${index + 1}-books`}
          type="books"
          value={parameters[element].rank[index + 1].booksCells}
          oldValue={oldParameters[element].rank[index + 1].booksCells}
        />
        <BarracksTalentInfo
          key={`talent-${element}-${index + 1}-crowns`}
          type="crowns"
          value={parameters[element].rank[index + 1].crownsCells}
          oldValue={oldParameters[element].rank[index + 1].crownsCells}
        />
      </Flexbox>
    ))}
  </Flexbox>
))

export default BarracksTalentsInfo
