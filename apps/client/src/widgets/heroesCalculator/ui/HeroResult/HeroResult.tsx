import { FC, memo } from 'react'
import { Flex, Text } from '@mantine/core'
import type { Hero } from 'kg-calculator-typings'
import { Bars, HeroIcon, Stars } from 'entities/hero'
import { KeysHelper, ResourceIcon } from 'entities/resource'
import css from '../CardDistribution/styles.module.sass'


interface Props {
  className?: string
  hero: Hero
  maxStars: number
  maxBars: number
  oldStars: number
  newStars?: number
  oldBars: number
  newBars?: number
  spentCards: number
  spentGoldCards: number
}

const HeroResult: FC<Props> = memo(
  ({ className, hero, maxBars, maxStars, newBars, oldBars, oldStars, newStars, spentCards, spentGoldCards }) => (
    <Flex className={className} gap={16} align="flex-start">
      <Flex direction="column" align="center" w={100} gap={4}>
        <HeroIcon heroId={hero.heroId} element={hero.element} />
        <Text size="sm">{hero.name}</Text>
      </Flex>
      <Flex
        direction={{
          xs: 'row',
          base: 'column',
        }}
        align="center"
        gap={16}
      >
        <Flex direction="column" w={80}>
          <Stars classNameStar={css.star} starsCount={maxStars} oldValue={oldStars} newValue={newStars} />
          <Bars barsCount={maxBars} oldValue={oldBars} newValue={newBars} />
        </Flex>
        <Flex direction="column">
          <Flex gap={4} align="center">
            <ResourceIcon resourceType={KeysHelper.getHeroCardsByRank(hero.rank)} />
            <Text component="span">Потрачено карт:</Text>
          </Flex>
          <Flex
            direction={{
              xs: 'column',
              base: 'row',
            }}
            gap={{
              xs: 0,
              base: 16,
            }}
          >
            <Text
              pl={{
                xs: 40,
                base: 0,
              }}
              component="span"
            >
              Всего: {spentCards}
            </Text>
            <Text
              pl={{
                xs: 40,
                base: 0,
              }}
              component="span"
            >
              Самовыбора:{' '}
              <Text component="span" fw={700}>
                {spentGoldCards}
              </Text>
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  ),
)

export default HeroResult
