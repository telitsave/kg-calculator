import { FC, memo, useMemo, useState } from 'react'
import { ActionIcon, Button, Flex, Text } from '@mantine/core'
import type { Hero } from 'kg-calculator-typings'
import { orderBy } from 'lodash'
import { FaStar } from 'react-icons/fa'
import { useServerSettings } from 'entities/serverSettings'
import useHeroesDistributionModel from '../../model/hooks/useHeroesDistributionModel'
import CardDistribution from '../CardDistribution'


interface Props {
  className?: string
}

const CardDistributionPanel: FC<Props> = memo(({ className }) => {
  const [sortField] = useState<keyof Hero>('rank')
  const { heroes, leftCards, fillStars, onSetCards, onReset } = useHeroesDistributionModel()
  const {
    serverSettings: { season },
  } = useServerSettings()

  const sortedHeroes = useMemo(() => {
    if (!heroes) return []
    return orderBy(heroes, [(hero) => hero[sortField], (hero) => hero.season], ['desc', 'asc'])
  }, [heroes, season, sortField])

  if (!heroes) return null

  return (
    <Flex className={className} direction="column" gap={8}>
      <Flex justify="space-between" align="center">
        <Text>Оставшиеся карты: {leftCards}</Text>
        <Flex align="center" gap="md">
          <ActionIcon variant="default" onClick={fillStars}>
            <FaStar color="var(--mantine-color-yellow-filled)" />
          </ActionIcon>
          <Button variant="default" onClick={onReset}>
            Сбросить
          </Button>
        </Flex>
      </Flex>
      {sortedHeroes.map((hero) => (
        <CardDistribution
          key={hero.heroId}
          heroId={hero.heroId}
          stars={hero.stars || 0}
          bars={hero.bars || 0}
          cards={hero.cards || 0}
          distributionCards={hero.distributionCards || 0}
          rank={hero.rank}
          name={hero.name}
          element={hero.element}
          onSetCards={onSetCards}
        />
      ))}
    </Flex>
  )
})

export default CardDistributionPanel
