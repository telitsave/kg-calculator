import { FC, memo } from 'react'
import { Progress, Text } from '@mantine/core'
import type { ElementsType, Parameters } from 'kg-calculator-typings'
import { FormattedMessage } from 'react-intl'
import { BarracksRankIcon } from '@shared/assets/icons'
import Flexbox from '@shared/ui/Flexbox'
import css from './styles.module.sass'


interface Props {
  className?: string
  element: ElementsType
  oldParams: Parameters
  newParams: Parameters
}

const BarracksElementalInfo: FC<Props> = memo(({ className, element, oldParams, newParams }) => {
  const oldRank = oldParams[`barracksParams_${element}_rank`] || 0
  const oldLevel = oldParams[`barracksParams_${element}_level`] || 0
  const newRank = newParams[`barracksParams_${element}_rank`] || 0
  const newLevel = newParams[`barracksParams_${element}_level`] || 0
  const totalLevels = newRank % 2 === 0 ? 200 : 100
  const blueValue = (oldRank === newRank ? oldLevel : 0) / totalLevels
  const greenValue = (newLevel - (oldRank === newRank ? oldLevel : 0)) / totalLevels
  return (
    <Flexbox className={className} flexDirection="column" alignItems="center" gap={8}>
      <BarracksRankIcon className={css.iconRank} element={element} rank={newRank} />

      <Flexbox justifyContent="center" alignItems="center" flexDirection="column">
        {oldRank !== newRank ? (
          <>
            <Text c="red" fw={700}>
              <FormattedMessage defaultMessage="Новый ранг!" />
            </Text>
            <Text>
              <FormattedMessage
                defaultMessage="Ранг: {oldRank} {arrow} {newRank}"
                values={{
                  oldRank,
                  newRank,
                  arrow: <>&#8594;</>,
                }}
              />
            </Text>
          </>
        ) : (
          <Text>
            <FormattedMessage
              defaultMessage="Ранг: {newRank}"
              values={{
                newRank,
              }}
            />
          </Text>
        )}
      </Flexbox>

      {newRank !== 9 && (
        <Flexbox flexDirection="column" alignItems="center">
          {oldLevel !== newLevel ? (
            <>
              <Text c="red" fw={700}>
                <FormattedMessage defaultMessage="Новый уровень!" />
              </Text>
              <Text>
                <FormattedMessage
                  defaultMessage="Уровень: {oldLevel} {arrow} {newLevel}"
                  values={{
                    oldLevel,
                    newLevel,
                    arrow: <>&#8594;</>,
                  }}
                />
              </Text>
            </>
          ) : (
            <Text>
              <FormattedMessage
                defaultMessage="Уровень: {newLevel}"
                values={{
                  newLevel,
                }}
              />
            </Text>
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
