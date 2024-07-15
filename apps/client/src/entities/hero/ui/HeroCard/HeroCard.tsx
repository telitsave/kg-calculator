import React, { FC, memo } from 'react'
import { Flex, NumberInput, Paper, SimpleGrid, Text } from '@mantine/core'
import type { Hero } from 'kg-calculator-typings'
import HeroHelper from '../../libs/HeroHelper'
import useHero from '../../model/hooks/useHero'
import HeroIcon from '../HeroIcon'


interface Props {
  className?: string
  heroData: Hero
}

const HeroCard: FC<Props> = memo(({ className, heroData }) => {
  const { hero, onSetCards, onSetLevel, onSetStars, onSetBars } = useHero(heroData.heroId, heroData.rank)

  return (
    <Paper shadow="sm" p="md" withBorder>
      <Flex className={className} align="center" gap={50}>
        <Flex direction="column" align="center" w={110}>
          <HeroIcon heroId={heroData.heroId} element={heroData.element} />
          <Text size="sm" ta="center">
            {heroData.name}
          </Text>
        </Flex>
        <SimpleGrid cols={2}>
          <NumberInput
            maw={140}
            miw={80}
            min={0}
            max={HeroHelper.getMaxStars(heroData.rank)}
            value={hero.stars}
            onChange={onSetStars}
            flex="1 1 50%"
            thousandSeparator=" "
            label="Количество звезд"
            hideControls
          />
          <NumberInput
            maw={140}
            miw={80}
            min={0}
            max={HeroHelper.getMaxBars(heroData.rank, hero.stars)}
            value={hero.bars}
            onChange={onSetBars}
            flex="1 1 50%"
            thousandSeparator=" "
            label="Количество бар"
            hideControls
          />
          <NumberInput
            maw={140}
            miw={80}
            min={0}
            value={hero.level}
            onChange={onSetLevel}
            flex="1 1 50%"
            thousandSeparator=" "
            label="Уровень"
            hideControls
          />
          <NumberInput
            maw={140}
            miw={80}
            min={0}
            value={hero.cards}
            onChange={onSetCards}
            flex="1 1 50%"
            thousandSeparator=" "
            label="Количество карт"
            hideControls
          />
        </SimpleGrid>
      </Flex>
    </Paper>
  )
})

export default HeroCard
