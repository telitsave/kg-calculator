import React, { FC, memo, useMemo } from 'react'
import { Flex } from '@mantine/core'
import { orderBy } from 'lodash'
import { useGetHeroesInCards } from 'entities/hero'
import CardDistribution from '../CardDistribution'


interface Props {
  className?: string
}

const CardDistributionPanel: FC<Props> = memo(({ className }) => {
  const { data } = useGetHeroesInCards()

  const sortedHeroes = useMemo(() => {
    if (!data) return []
    return orderBy(data, [(hero) => hero.rank, (hero) => hero.season], ['desc', 'asc'])
  }, [data])

  if (!data) return null

  return (
    <Flex className={className} direction="column" gap={8}>
      {sortedHeroes.map((hero) => (
        <CardDistribution key={hero.heroId} heroData={hero} />
      ))}
    </Flex>
  )
})

export default CardDistributionPanel
