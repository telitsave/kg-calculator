import React, { FC, memo, useCallback, useMemo, useState } from 'react'
import { Button, Flex, NumberInput, Rating, Text } from '@mantine/core'
import type { Hero } from 'kg-calculator-typings'
import { AiOutlineCaretLeft, AiOutlineCaretRight } from 'react-icons/ai'
import { HeroIcon } from 'entities/hero'
import HeroHelper from 'entities/hero/libs/HeroHelper'
import useHero from 'entities/hero/model/hooks/useHero'
import Bars from '../../../../entities/hero/ui/Bars'


interface Props {
  className?: string
  heroData: Hero
}

const CardDistribution: FC<Props> = memo(({ className, heroData }) => {
  const [cards, setCards] = useState(0)
  const { hero } = useHero(heroData.heroId, heroData.rank)
  const { newStars, newBars, leftCards, neededCardsForNextLevel, spentCardsForPrevLevel } = useMemo(
    () => HeroHelper.upStarsBars(hero.stars, hero.bars, hero.cards + cards, heroData.rank),
    [hero, heroData, cards],
  )

  const maxStars = HeroHelper.getMaxStars(heroData.rank)

  const handleInputChange = useCallback((value: string | number) => {
    setCards(Number(value))
  }, [])

  const handleAddCardsButtonClick = useCallback(() => {
    setCards((val) => val + neededCardsForNextLevel)
  }, [neededCardsForNextLevel])

  const handleRemoveCardsButtonClick = useCallback(() => {
    setCards((val) =>
      val < spentCardsForPrevLevel ? 0 : spentCardsForPrevLevel === 0 ? 0 : val - spentCardsForPrevLevel,
    )
  }, [spentCardsForPrevLevel])

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
        <HeroIcon heroId={heroData.heroId} element={heroData.element} />
        <Text size="sm">{heroData.name}</Text>
      </Flex>
      <Flex gap={16} align="center">
        <Flex direction="column" w={100}>
          <Rating value={hero.stars} readOnly size={20} count={maxStars} />
          <Bars rank={heroData.rank} stars={hero.stars} value={hero.bars} />
          <Text size="sm">Карт: {hero.cards}</Text>
          <Text>&nbsp;</Text>
        </Flex>
        <Flex gap={8}>
          <Button variant="outline" size="xs" p={8} onClick={handleRemoveCardsButtonClick}>
            <AiOutlineCaretLeft />
          </Button>
          <NumberInput
            className={className}
            size="xs"
            hideControls
            w={65}
            min={0}
            value={cards}
            onChange={handleInputChange}
          />
          <Button variant="outline" size="xs" p={8} onClick={handleAddCardsButtonClick}>
            <AiOutlineCaretRight />
          </Button>
        </Flex>

        <Flex direction="column" w={100}>
          <Rating value={newStars} readOnly size={20} count={maxStars} />
          <Bars value={newBars} rank={heroData.rank} stars={newStars} />
          <Text size="sm">Осталось: {leftCards}</Text>
          {neededCardsForNextLevel > 0 && <Text size="sm">Надо: {neededCardsForNextLevel}</Text>}
        </Flex>
      </Flex>
    </Flex>
  )
})

export default CardDistribution
