import { FC, memo, useCallback } from 'react'
import cx from 'classnames'
import { Button, Flex, NumberInput, Paper, Text, useMatches } from '@mantine/core'
import type { ElementsType, Ranks } from 'kg-calculator-typings'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import HelpButton from 'shared/ui/HelpButton'
import { Bars, Stars } from '../../index'
import useHeroes from '../../model/hooks/useHeroes'
import HeroIcon from '../HeroIcon'
import css from './styles.module.sass'


interface Props {
  className?: string
  heroId: string
  stars: number
  bars: number
  cards: number | undefined
  distributionCards: number | undefined
  rank: Ranks
  element: ElementsType
  name: string
  maxBars: number
  maxStars: number

  onAddStar: ReturnType<typeof useHeroes>['onAddStar']
  onAddBar: ReturnType<typeof useHeroes>['onAddBar']
  onRemoveStar: ReturnType<typeof useHeroes>['onRemoveStar']
  onRemoveBar: ReturnType<typeof useHeroes>['onRemoveBar']
  onSetCards: ReturnType<typeof useHeroes>['onSetCards']
}

const HeroCard: FC<Props> = memo(
  ({
    className,
    heroId,
    stars,
    bars,
    cards,
    distributionCards,
    rank,
    element,
    name,
    maxBars,
    maxStars,
    onSetCards,
    onAddStar,
    onAddBar,
    onRemoveBar,
    onRemoveStar,
  }) => {
    const handleAddStarClick = useCallback(() => {
      onAddStar(heroId, rank, stars, bars, cards || 0, distributionCards || 0)
    }, [onAddStar, heroId, rank, stars, bars, cards, distributionCards])

    const handleAddBarClick = useCallback(() => {
      onAddBar(heroId, rank, stars, bars, cards || 0, distributionCards || 0)
    }, [onAddBar, heroId, rank, stars, bars, cards, distributionCards])

    const handleRemoveStarClick = useCallback(() => {
      onRemoveStar(heroId, rank, stars, bars, cards || 0, distributionCards || 0)
    }, [onRemoveStar, heroId, rank, stars, bars, cards, distributionCards])

    const handleRemoveBarClick = useCallback(() => {
      onRemoveBar(heroId, rank, stars, bars, cards || 0, distributionCards || 0)
    }, [onRemoveBar, heroId, rank, stars, bars, cards, distributionCards])

    const handleSetCards = useCallback(
      (value: string | number) => {
        onSetCards(heroId, stars, bars, value as number, distributionCards || 0)
      },
      [onSetCards, heroId, stars, bars, cards, distributionCards],
    )

    const sizeBlocks = useMatches({
      xs: 'md',
      base: 'xs',
    })

    return (
      <Paper shadow="sm" p={sizeBlocks} withBorder>
        <Flex className={cx(css.root, className)} align="center" gap={sizeBlocks}>
          <Flex direction="column" align="center" w={110}>
            <HeroIcon heroId={heroId} element={element} />
            <Text size="sm" ta="center">
              {name}
            </Text>
          </Flex>
          <Flex
            direction={{
              xs: 'row',
              base: 'column',
            }}
            gap={16}
            align={{
              xs: 'center',
              base: 'flex-start',
            }}
            flex="1 1 auto"
          >
            <Flex align="center" gap={7} flex="1 1 auto" w="100%">
              <Button variant="outline" size={sizeBlocks} p={8} onClick={handleRemoveStarClick} tabIndex={-1}>
                <FaStarHalfAlt color="var(--mantine-color-yellow-filled)" />
              </Button>
              <Button variant="outline" size={sizeBlocks} p={8} onClick={handleRemoveBarClick} tabIndex={-1}>
                -1
              </Button>
              <Flex direction="column">
                <Stars classNameStar={css.star} starsCount={maxStars} oldValue={stars} />
                <Bars barsCount={maxBars} oldValue={bars} />
              </Flex>
              <Button variant="outline" size={sizeBlocks} p={8} onClick={handleAddBarClick} tabIndex={-1}>
                +1
              </Button>
              <Button variant="outline" size={sizeBlocks} p={8} onClick={handleAddStarClick} tabIndex={-1}>
                <FaStar color="var(--mantine-color-yellow-filled)" />
              </Button>
            </Flex>
            <NumberInput
              maw={140}
              miw={80}
              min={0}
              mb={{
                xs: 18,
                base: 0,
              }}
              value={cards}
              onChange={handleSetCards}
              flex="1 1 50%"
              thousandSeparator=" "
              label={
                <Flex gap={4}>
                  <Text fw={700} size="xs">
                    Количество карт
                  </Text>
                  <HelpButton helpContent="Количество карт берем в игре с экрана со списком всех героев (там количество указано с +1 обязательной картой). Если героя нет в наличии, выставляем 0 карт." />
                </Flex>
              }
              clampBehavior="strict"
              hideControls
            />
          </Flex>
        </Flex>
      </Paper>
    )
  },
)

export default HeroCard
