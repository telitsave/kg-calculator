import { FC, memo } from 'react'
import { Flex, Text } from '@mantine/core'
import type { Hero } from 'kg-calculator-typings'
import { HeroIcon } from 'entities/hero'
import { KeysHelper, ResourceIcon } from 'entities/resource'


interface Props {
  className?: string
  hero: Hero
  spentCards: number
}

const HeroExperienceResult: FC<Props> = memo(({ className, hero, spentCards }) => (
  <Flex className={className} gap={16} align="center">
    <Flex direction="column" align="center" w={100} gap={4}>
      <HeroIcon heroId={hero.heroId} element={hero.element} />
      <Text size="sm">{hero.name}</Text>
    </Flex>
    <Flex direction="column">
      <Flex gap={4} align="center">
        <ResourceIcon resourceType={KeysHelper.getHeroCardsByRank(hero.rank)} />
        <Text>Потрачено: {spentCards}</Text>
      </Flex>
    </Flex>
  </Flex>
))

export default HeroExperienceResult
