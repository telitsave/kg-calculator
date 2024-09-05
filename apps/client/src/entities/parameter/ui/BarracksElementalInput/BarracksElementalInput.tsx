import { FC, memo, useCallback, useEffect, useState } from 'react'
import { NumberInput, Progress } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import { BarracksRankIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import useParameter from '../../model/hooks/useParameter'


interface Props {
  className?: string
  element: ElementsType
}

const BarracksElementalInput: FC<Props> = memo(({ className, element }) => {
  const [level = 0, setLevel] = useParameter(`barracksParams_${element}_level`)
  const [rank = 1, setRank] = useParameter(`barracksParams_${element}_rank`)
  const [levelState, setLevelState] = useState(level)
  const [rankState, setRankState] = useState(rank)

  const handleChangeRank = useCallback(
    (value: string | number) => {
      setRank(Number(value))
      setLevel(0)
      setRankState(Number(value))
      setLevelState(0)
    },
    [setRank, setLevel],
  )

  const handleChangeLevel = useCallback(
    (value: string | number) => {
      setLevel(Number(value))
      setLevelState(Number(value))
    },
    [setLevel],
  )

  useEffect(() => {
    if (level) {
      setLevelState(level)
    }
    if (rank) {
      setRankState(rank)
    }
  }, [level, rank])

  return (
    <Flexbox className={className} flexDirection="column" gap={8}>
      <Flexbox justifyContent="space-between" gap={8}>
        <NumberInput min={1} max={9} value={rankState} label="Ранг" onChange={handleChangeRank} />
        <NumberInput
          min={0}
          max={rankState % 2 === 0 ? 200 : 100}
          value={levelState}
          onChange={handleChangeLevel}
          disabled={rankState === 9}
          label="Уровень"
        />
      </Flexbox>
      <Flexbox justifyContent="space-between" alignItems="center">
        <BarracksRankIcon element={element} rank={rankState} />
        <Progress w="30%" value={rankState % 2 === 0 ? levelState / 2 : levelState} />
        <BarracksRankIcon element={element} rank={rankState + 1} />
      </Flexbox>
    </Flexbox>
  )
})

export default BarracksElementalInput
