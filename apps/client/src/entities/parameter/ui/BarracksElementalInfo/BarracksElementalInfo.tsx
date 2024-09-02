import { FC, memo } from 'react'
import { Progress, Text } from '@mantine/core'
import type { BarracksParameters } from 'kg-calculator-typings/api/Barracks'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import { BarracksRankIcon } from 'shared/assets/icons'
import Flexbox from 'shared/ui/Flexbox'

interface Props {
  className?: string
  element: ElementsType
  oldBarrackParams: BarracksParameters
  barrackParams: BarracksParameters
}

const BarracksElementalInfo: FC<Props> = memo(({ className, element, oldBarrackParams, barrackParams }) => {
  const oldRank = oldBarrackParams[`${element}Rank`]
  const oldLevel = oldBarrackParams[`${element}Level`]
  const newRank = barrackParams[`${element}Rank`]
  const newLevel = barrackParams[`${element}Level`]
  const totalLevels = newRank % 2 === 0 ? 200 : 100
  const blueValue = (oldRank === newRank ? oldLevel : 0) / totalLevels
  const greenValue = (newLevel - (oldRank === newRank ? oldLevel : 0)) / totalLevels
  return (
    <Flexbox className={className} flexDirection="column" alignItems="center" gap={8}>
      <BarracksRankIcon element={element} rank={newRank} />

      <Flexbox justifyContent="center" alignItems="center" flexDirection="column">
        {oldRank !== newRank ? (
          <>
            <Text c="red" fw={700}>
              Новый ранг!
            </Text>
            <Text>
              Ранг: {oldRank} &#8594; {newRank}
            </Text>
          </>
        ) : (
          <Text>Ранг: {newRank}</Text>
        )}
      </Flexbox>

      {newRank !== 9 && (
        <Flexbox flexDirection="column" alignItems="center">
          {oldLevel !== newLevel ? (
            <>
              <Text c="red" fw={700}>
                Новый уровень!
              </Text>
              <Text>
                Уровень: {oldLevel} &#8594; {newLevel}
              </Text>
            </>
          ) : (
            <Text>Уровень: {newLevel}</Text>
          )}
          <Progress.Root size="xl" w="100%" mt={4}>
            <Progress.Section value={blueValue * 100} color="#4A96E7"></Progress.Section>
            <Progress.Section value={greenValue * 100} color="#72EA41"></Progress.Section>
          </Progress.Root>
        </Flexbox>
      )}
    </Flexbox>
  )
})

export default BarracksElementalInfo
