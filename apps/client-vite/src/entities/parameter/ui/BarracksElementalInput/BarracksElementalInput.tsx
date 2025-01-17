import { FC, memo, useCallback } from 'react'
import { NumberInput, Progress } from '@mantine/core'
import type { ElementsType } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import { BarracksRankIcon } from '@shared/assets/icons'
import Flexbox from '@shared/ui/Flexbox'
import BarracksHelper from '../../helpers/barracksHelper'
import useParameter from '../../model/hooks/useParameter'


interface Props {
  className?: string
  element: ElementsType
}

const BarracksElementalInput: FC<Props> = memo(({ className, element }) => {
  const [rank, setRank] = useParameter(`barracksParams_${element}_rank`)
  const [level, setLevel] = useParameter(`barracksParams_${element}_level`)

  const handleChangeRank = useCallback(
    (value: string | number) => {
      setRank(value)
      setLevel(0)
    },
    [setRank, setLevel],
  )

  const handleChangeLevel = useCallback(
    (value: string | number) => {
      setLevel(value)
    },
    [setLevel],
  )

  return (
    <Flexbox className={className} flexDirection="column" gap={8}>
      <Flexbox justifyContent="space-between" gap={8}>
        <NumberInput
          min={1}
          max={9}
          value={rank}
          label={<FormattedMessage defaultMessage="Ранг" />}
          onChange={handleChangeRank}
          clampBehavior="strict"
        />
        <NumberInput
          min={0}
          max={BarracksHelper.getMaxLevels(rank)}
          value={level}
          onChange={handleChangeLevel}
          disabled={(rank || 1) >= 9}
          clampBehavior="strict"
          label={<FormattedMessage defaultMessage="Уровень" />}
        />
      </Flexbox>
      <Flexbox justifyContent="space-between" alignItems="center">
        <BarracksRankIcon element={element} rank={rank || 1} />
        <Progress w="30%" value={BarracksHelper.getPercentProgress(rank, level)} />
        <BarracksRankIcon element={element} rank={(rank || 1) + 1} />
      </Flexbox>
    </Flexbox>
  )
})

export default BarracksElementalInput
