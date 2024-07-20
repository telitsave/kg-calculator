import React, { FC, memo, useCallback, useMemo } from 'react'
import { Button, Flex, Text } from '@mantine/core'
import type { ElementsType, Ranks } from 'kg-calculator-typings'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import { Bars, HeroHelper, HeroIcon, Stars } from 'entities/hero'
import { ResourceIcon } from 'entities/resource'
import css from './styles.module.sass'


interface Props {
  className?: string
  id: string
  name: string
  stars: number
  bars: number
  heroCards: number
  rank: Ranks
  element: ElementsType
  cards: number | undefined

  onSetCards: (heroId: string, cardsAmount: number) => void
}

const CardDistribution: FC<Props> = memo(
  ({ className, id, name, element, stars, heroCards, bars, rank, cards = 0, onSetCards }) => {
    const {
      newStars,
      newBars,
      neededCardsForNextLevel,
      neededCardsForNextStar,
      spentCardsForPrevLevel,
      spentCardsForPrevStar,
    } = useMemo(
      () => HeroHelper.upStarsBars(stars, bars, heroCards + cards, rank),
      [stars, bars, heroCards, rank, cards],
    )

    const maxStars = HeroHelper.getMaxStars(rank)
    const maxBars = HeroHelper.getMaxBars(rank, newStars)

    const handleAddLevelClick = useCallback(() => {
      onSetCards(id, cards + neededCardsForNextLevel)
    }, [neededCardsForNextLevel, onSetCards, cards])

    const handleRemoveLevelClick = useCallback(() => {
      onSetCards(
        id,
        cards < spentCardsForPrevLevel ? 0 : spentCardsForPrevLevel === 0 ? 0 : cards - spentCardsForPrevLevel,
      )
    }, [spentCardsForPrevLevel, onSetCards, cards])

    const handleAddStarClick = useCallback(() => {
      onSetCards(id, cards + neededCardsForNextStar)
    }, [neededCardsForNextLevel, onSetCards, cards])

    const handleRemoveStarClick = useCallback(() => {
      onSetCards(
        id,
        cards < spentCardsForPrevStar ? 0 : spentCardsForPrevStar === 0 ? 0 : cards - spentCardsForPrevStar,
      )
    }, [spentCardsForPrevLevel, onSetCards, cards])

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
          <HeroIcon heroId={id} element={element} />
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
            Исп-но <ResourceIcon className={css.icon} resourceType="heroGoldCards" />: {cards}
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
