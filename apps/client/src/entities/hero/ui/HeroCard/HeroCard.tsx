import { FC, memo, useCallback } from 'react'
import { Button, Flex, NumberInput, Paper, Text } from '@mantine/core'
import type { ElementsType, Ranks } from 'kg-calculator-typings'
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'
import HelpButton from 'shared/ui/HelpButton'
import css from 'widgets/heroesCalculator/ui/CardDistribution/styles.module.sass'
import { Bars, Stars } from '../../index'
import HeroIcon from '../HeroIcon'

interface Props {
  className?: string
  id: string
  element: ElementsType
  name: string
  maxBars: number
  maxStars: number
  stars: number
  bars: number
  cards: number
  rank: Ranks

  onAddStar: (heroId: string, rank: Ranks) => void
  onAddBar: (heroId: string, rank: Ranks) => void
  onRemoveStar: (heroId: string, rank: Ranks) => void
  onRemoveBar: (heroId: string, rank: Ranks) => void
  onSetCards: (cards: number, heroId: string, rank: Ranks) => void
}

const HeroCard: FC<Props> = memo(
  ({
    className,
    id,
    element,
    name,
    maxBars,
    maxStars,
    stars,
    bars,
    cards,
    rank,
    onSetCards,
    onAddStar,
    onAddBar,
    onRemoveBar,
    onRemoveStar,
  }) => {
    const handleAddStarClick = useCallback(() => {
      onAddStar(id, rank)
    }, [onAddStar, id, rank])

    const handleAddBarClick = useCallback(() => {
      onAddBar(id, rank)
    }, [onAddBar, id, rank])

    const handleRemoveStarClick = useCallback(() => {
      onRemoveStar(id, rank)
    }, [onRemoveStar, id, rank])

    const handleRemoveBarClick = useCallback(() => {
      onRemoveBar(id, rank)
    }, [onRemoveBar, id, rank])

    const handleSetCards = useCallback(
      (value: string | number) => {
        onSetCards(Number(value), id, rank)
      },
      [onSetCards, id, rank],
    )

    return (
      <Paper shadow="sm" p="md" withBorder>
        <Flex className={className} align="center" gap={20}>
          <Flex direction="column" align="center" w={110}>
            <HeroIcon heroId={id} element={element} />
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
          >
            <Flex align="center" gap={8}>
              <Button variant="outline" size="md" p={8} onClick={handleRemoveStarClick} tabIndex={-1}>
                <FaStarHalfAlt color="var(--mantine-color-yellow-filled)" />
              </Button>
              <Button variant="outline" size="md" p={8} onClick={handleRemoveBarClick} tabIndex={-1}>
                -1
              </Button>
              <Flex direction="column" w={80}>
                <Stars classNameStar={css.star} starsCount={maxStars} oldValue={stars} />
                <Bars barsCount={maxBars} oldValue={bars} />
              </Flex>
              <Button variant="outline" size="md" p={8} onClick={handleAddBarClick} tabIndex={-1}>
                +1
              </Button>
              <Button variant="outline" size="md" p={8} onClick={handleAddStarClick} tabIndex={-1}>
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
              hideControls
            />
          </Flex>
        </Flex>
      </Paper>
    )
  },
)

export default HeroCard
