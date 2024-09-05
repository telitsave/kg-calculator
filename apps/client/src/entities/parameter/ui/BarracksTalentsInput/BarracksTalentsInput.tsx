import { FC, Fragment, MouseEvent, memo, useCallback, useEffect, useState } from 'react'
import { Button, Divider, Text } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import Flexbox from 'shared/ui/Flexbox'
import useParameters from '../../model/hooks/useParameters'
import BarracksTalentInput from '../BarracksTalentInput'


interface Props {
  className?: string
  element: ElementsType
  maxRank: number
}

const BarracksTalentsInput: FC<Props> = memo(({ className, element, maxRank }) => {
  const { saveTalent, talents = {} } = useParameters()
  const [talentsState, setTalentsState] = useState(talents)

  useEffect(() => {
    if (Object.keys(talents).length > 0) {
      setTalentsState(talents)
    }
  }, [talents])

  const handleMaxButtonClick = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const rank = Number(e.currentTarget.dataset.rank)
      saveTalent(element, rank, 'small', 48)
      saveTalent(element, rank, 'big', 6)
      setTalentsState((val) => ({
        ...val,
        [`${element}_${rank}_small`]: 48,
        [`${element}_${rank}_big`]: 6,
      }))
    },
    [element, saveTalent],
  )

  const handleInputChange = useCallback(
    (rank: number, type: 'big' | 'small', value: number) => {
      saveTalent(element, rank, type, value)
      setTalentsState((val) => ({
        ...val,
        [`${element}_${rank}_${type}`]: value,
      }))
    },
    [saveTalent, element],
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
                rank={index + 1}
                type="small"
                value={talentsState[`${element}_${index + 1}_small`] || 0}
                onChange={handleInputChange}
              />
              <BarracksTalentInput
                key={`talent-${element}-${index + 1}-crowns`}
                element={element}
                rank={index + 1}
                type="big"
                value={talentsState[`${element}_${index + 1}_big`] || 0}
                onChange={handleInputChange}
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
