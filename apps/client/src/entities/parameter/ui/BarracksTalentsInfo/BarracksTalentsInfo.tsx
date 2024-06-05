import React, { FC, memo } from 'react'
import { Text } from '@mantine/core'
import { TalentsParameters } from 'shared/api'
import Flexbox from 'shared/ui/Flexbox'
import { BarracksElements } from '../../model/types'
import BarracksTalentInfo from '../BarracksTalentInfo'

interface Props {
  className?: string
  element: BarracksElements
  parameters: TalentsParameters
  oldParameters: TalentsParameters
}

const BarracksTalentsInfo: FC<Props> = memo(({ className, element, parameters, oldParameters }) => (
  <Flexbox className={className} flexDirection="column">
    {Array.from({ length: 5 }).map((_, index) => (
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
