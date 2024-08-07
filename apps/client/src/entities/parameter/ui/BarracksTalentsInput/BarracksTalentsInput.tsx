import React, { FC, Fragment, MouseEvent, memo, useCallback } from 'react'
import { Button, Divider, Text } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import { IntRange } from 'shared/types'
import Flexbox from 'shared/ui/Flexbox'
import useTalentsParameters from '../../model/hooks/useTalentsParameters'
import BarracksTalentInput from '../BarracksTalentInput'


interface Props {
  className?: string
  element: ElementsType
  maxRank: number
}

const BarracksTalentsInput: FC<Props> = memo(({ className, element, maxRank }) => {
  const { write: talentsParameters } = useTalentsParameters()

  const handleMaxButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const rank = Number(e.currentTarget.dataset.rank)
      talentsParameters[element].rank[rank as IntRange<1, 10>].booksCells(48)
      talentsParameters[element].rank[rank as IntRange<1, 10>].crownsCells(6)
    },
    [element, talentsParameters],
  )

  return (
    <Flexbox className={className} flexDirection="column" gap={8}>
      {Array.from({ length: maxRank }).map((_, index, array) => (
        <Fragment key={index}>
          <Flexbox alignItems="center" gap={8}>
            <Text flex="0 0 auto">Ранг {index + 1}:</Text>
            <Flexbox flexWrap="wrap" justifyContent="center" gap={8}>
              <BarracksTalentInput
                key={`talent-${element}-${index + 1}-books`}
                element={element}
                rank={`rank${index + 1}`}
                type="books"
              />
              <BarracksTalentInput
                key={`talent-${element}-${index + 1}-crowns`}
                element={element}
                rank={`rank${index + 1}`}
                type="crowns"
              />
            </Flexbox>
            <Button data-rank={index + 1} onClick={handleMaxButtonClick} flex="0 0 auto">
              MAX
            </Button>
          </Flexbox>
          {index < array.length - 1 && <Divider />}
        </Fragment>
      ))}
    </Flexbox>
  )
})

export default BarracksTalentsInput
