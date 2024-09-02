import { FC, memo, useMemo, useState } from 'react'
import { Flex, Text } from '@mantine/core'
import type { Hero } from 'kg-calculator-typings'
import { orderBy } from 'lodash'
import useHeroesDistributionModel from '../../model/hooks/useHeroesDistributionModel'
import CardDistribution from '../CardDistribution'

interface Props {
  className?: string
}

const CardDistributionPanel: FC<Props> = memo(({ className }) => {
  const [sortField] = useState<keyof Hero>('rank')
  const { heroes, leftCards, heroesDistribution, onSetCards } = useHeroesDistributionModel()

  const sortedHeroes = useMemo(() => {
    if (!heroes) return []
    const filteredData = heroes.filter((it) => it.rank === 'ssr')
    return orderBy(filteredData, [(hero) => hero[sortField], (hero) => hero.season], ['desc', 'asc'])
  }, [heroes, sortField])

  if (!heroes) return null

  return (
    <Flex className={className} direction="column" gap={8}>
      <Text>Оставшиеся карты: {leftCards}</Text>
      {sortedHeroes.map((hero) => (
        <CardDistribution
          key={hero.heroId}
          id={hero.heroId}
          element={hero.element}
          rank={hero.rank}
          name={hero.name}
          stars={hero.stars || 0}
          heroCards={hero.cards || 0}
          bars={hero.bars || 0}
          cards={heroesDistribution[hero.heroId]}
          onSetCards={onSetCards}
        />
      ))}
    </Flex>
  )
})

export default CardDistributionPanel
