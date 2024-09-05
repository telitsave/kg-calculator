import { FC, memo, useCallback, useMemo } from 'react'
import { Button, Flex, Text } from '@mantine/core'
import type { ElementsType, Ranks } from 'kg-calculator-typings'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Bars, HeroHelper, HeroIcon, Stars } from 'entities/hero'
import { ResourceIcon } from 'entities/resource'
import useHeroesDistributionModel from '../../model/hooks/useHeroesDistributionModel'
import css from './styles.module.sass'


interface Props {
  className?: string
  heroId: string
  stars: number
  bars: number
  cards: number
  distributionCards: number
  rank: Ranks
  element: ElementsType
  name: string
  onSetCards: ReturnType<typeof useHeroesDistributionModel>['onSetCards']
}

const CardDistribution: FC<Props> = memo(
  ({ className, heroId, stars, bars, cards, distributionCards, rank, element, name, onSetCards }) => {
    const {
      newStars,
      newBars,
      neededCardsForNextLevel,
      neededCardsForNextStar,
      spentCardsForPrevLevel,
      spentCardsForPrevStar,
    } = useMemo(
      () => HeroHelper.upStarsBars(stars, bars, cards + distributionCards, rank),
      [stars, bars, distributionCards, rank, cards],
    )

    const maxStars = HeroHelper.getMaxStars(rank)
    const maxBars = HeroHelper.getMaxBars(rank, newStars)

    const handleAddLevelClick = useCallback(() => {
      onSetCards(heroId, stars, bars, cards, distributionCards, distributionCards + neededCardsForNextLevel)
    }, [neededCardsForNextLevel, onSetCards, heroId, stars, bars, cards, distributionCards])

    const handleRemoveLevelClick = useCallback(() => {
      onSetCards(
        heroId,
        stars,
        bars,
        cards,
        distributionCards,
        distributionCards < spentCardsForPrevLevel
          ? 0
          : spentCardsForPrevLevel === 0
            ? 0
            : distributionCards - spentCardsForPrevLevel,
      )
    }, [spentCardsForPrevLevel, onSetCards, heroId, stars, bars, cards, distributionCards])

    const handleAddStarClick = useCallback(() => {
      onSetCards(heroId, stars, bars, cards, distributionCards, distributionCards + neededCardsForNextStar)
    }, [neededCardsForNextLevel, onSetCards, heroId, stars, bars, cards, distributionCards])

    const handleRemoveStarClick = useCallback(() => {
      onSetCards(
        heroId,
        stars,
        bars,
        cards,
        distributionCards,
        distributionCards < spentCardsForPrevStar
          ? 0
          : spentCardsForPrevStar === 0
            ? 0
            : distributionCards - spentCardsForPrevStar,
      )
    }, [spentCardsForPrevLevel, onSetCards, heroId, stars, bars, cards, distributionCards])

    return (
      <Flex className={className} align="center" gap={16}>
        <Flex
          direction="column"
          align="center"
          w={{
            base: 48,
            sm: 64,
          }}
        >
          <HeroIcon heroId={heroId} element={element} small />
          <Text size="sm">{name}</Text>
        </Flex>
        <Flex gap={8} align="center">
          <Button variant="outline" size="md" p={8} onClick={handleRemoveStarClick}>
            <FaStarHalfAlt color="var(--mantine-color-yellow-filled)" />
          </Button>
          <Button variant="outline" size="md" p={8} onClick={handleRemoveLevelClick}>
            -1
          </Button>
          <Flex direction="column" w={80}>
            <Stars classNameStar={css.star} starsCount={maxStars} oldValue={stars} newValue={newStars} />
            <Bars barsCount={maxBars} oldValue={stars !== newStars ? 0 : bars} newValue={newBars} />
          </Flex>
          <Button variant="outline" size="md" p={8} onClick={handleAddLevelClick}>
            +1
          </Button>
          <Button variant="outline" size="md" p={8} onClick={handleAddStarClick}>
            <FaStar color="var(--mantine-color-yellow-filled)" />
          </Button>
        </Flex>
        <Flex direction="column">
          <Text
            size="sm"
            display="flex"
            style={{
              alignItems: 'center',
              gap: 4,
            }}
          >
            Исп-но <ResourceIcon className={css.icon} resourceType="heroesResources_ssr" />: {distributionCards}
          </Text>
          <Text
            size="sm"
            display="flex"
            style={{
              alignItems: 'center',
              gap: 4,
            }}
          >
            До <div className={css.bar} />: {neededCardsForNextLevel}
          </Text>
          <Text
            size="sm"
            display="flex"
            style={{
              alignItems: 'center',
              gap: 4,
            }}
          >
            До <FaStar className={css.star} color="var(--mantine-color-yellow-filled)" />: {neededCardsForNextStar}
          </Text>
        </Flex>
      </Flex>
    )
  },
)

export default CardDistribution
