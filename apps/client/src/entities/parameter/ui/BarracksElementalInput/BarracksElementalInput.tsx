import React, { FC, memo, useCallback } from 'react'
import { NumberInput, Progress } from '@mantine/core'
import { BarracksRankIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'
import useBarracksParameter from '../../model/hooks/useBarracksParameter'
import { BarracksElements } from '../../model/types'

interface Props {
  className?: string
  element: BarracksElements
}

const BarracksElementalInput: FC<Props> = memo(({ className, element }) => {
  const { rank, level } = useBarracksParameter(element)
  const rankValue = rank[0] || 1
  const levelValue = level[0]

  const handleChangeRank = useCallback(
    (value: string | number) => {
      rank[1](Number(value))
      level[1](0)
    },
    [level, rank],
  )

  const handleChangeLevel = useCallback(
    (value: string | number) => {
      level[1](Number(value))
    },
    [level],
  )

  return (
    <Flexbox className={className} flexDirection="column" gap={8}>
      <Flexbox justifyContent="space-between" gap={8}>
        <NumberInput min={1} max={9} value={rankValue} label="Ранг" onChange={handleChangeRank} />
        <NumberInput
          min={0}
          max={rankValue % 2 === 0 ? 200 : 100}
          value={levelValue}
          onChange={handleChangeLevel}
          disabled={rankValue === 9}
          label="Уровень"
        />
      </Flexbox>
      <Flexbox justifyContent="space-between" alignItems="center">
        <BarracksRankIcon element={element} rank={rankValue} />
        <Progress w="30%" value={rankValue % 2 === 0 ? levelValue / 2 : levelValue} />
        <BarracksRankIcon element={element} rank={rankValue + 1} />
      </Flexbox>
    </Flexbox>
  )
})

export default BarracksElementalInput
