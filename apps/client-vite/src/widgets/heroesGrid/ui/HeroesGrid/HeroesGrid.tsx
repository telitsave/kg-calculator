import { FC, memo, useCallback, useMemo, useState } from 'react'
import { Button, Flex } from '@mantine/core'
import type { ElementsType, Hero, IHeroData } from 'kg-calculator-typings'
import { orderBy } from 'lodash'
import { HeroCard, HeroHelper } from '@entities/hero'
import { useLocaleContext } from '@features/setLocale'
import useData from '../../model/hooks/useData'
import ElementFilter from '../ElementFilter'


interface Props {
  className?: string
}

const baseSort = (heroes: (Hero & Partial<IHeroData>)[], locale: 'en' | 'ru') =>
  orderBy(
    heroes,
    ['element', 'rank', (hero) => (locale === 'en' && hero.nameEn ? hero.nameEn : hero.name)],
    ['asc', 'desc', 'asc'],
  )

const customSort = (heroes: (Hero & Partial<IHeroData>)[], locale: 'en' | 'ru') =>
  orderBy(
    heroes,
    [
      'element',
      'rank',
      (hero) => hero.stars || 0,
      (hero) => hero.bars || 0,
      (hero) => hero.cards || 0,
      (hero) => (locale === 'en' && hero.nameEn ? hero.nameEn : hero.name),
    ],
    ['asc', 'desc', 'desc', 'desc', 'desc', 'asc'],
  )

const HeroesGrid: FC<Props> = memo(({ className }) => {
  const { locale } = useLocaleContext()
  const { heroes, onRemoveBar, onAddBar, onRemoveStar, onAddStar, onSetCards } = useData()
  const [elementsFilter, setElementsFilter] = useState<ElementsType | null>(null)
  const [customSortingHeroesIds, setCustomSortingHeroesIds] = useState<string[]>([])
  const heroesFilteredSorted = useMemo(() => {
    let result = [...heroes]

    if (customSortingHeroesIds.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      result = customSortingHeroesIds.map((id) => heroes.find((hero) => hero.heroId === id)!)
    }

    if (elementsFilter) {
      result = result.filter((it) => it.element === elementsFilter)
    }

    return customSortingHeroesIds.length > 0 ? result : baseSort(result, locale)
  }, [customSortingHeroesIds, elementsFilter, heroes, locale])

  const handleSortButtonClick = useCallback(() => {
    setCustomSortingHeroesIds(customSort(heroes, locale).map((hero) => hero.heroId))
  }, [heroes, locale])

  const handleResetButtonClick = useCallback(() => {
    setCustomSortingHeroesIds([])
  }, [])

  return (
    <Flex direction="column" gap={16}>
      <Flex justify="space-between" align="center">
        <Flex justify="flex-start" gap="md">
          <Button onClick={handleSortButtonClick}>Отсортировать героев</Button>
          <Button onClick={handleResetButtonClick} disabled={customSortingHeroesIds.length === 0}>
            Сбросить
          </Button>
        </Flex>
        <Flex justify="flex-end">
          <ElementFilter value={elementsFilter} onChange={setElementsFilter} />
        </Flex>
      </Flex>
      <Flex className={className} direction="column" gap={8}>
        {heroesFilteredSorted.map((hero) => {
          const heroName = locale === 'en' && hero.nameEn ? hero.nameEn : hero.name
          return (
            <HeroCard
              key={hero.heroId}
              heroId={hero.heroId}
              stars={hero.stars || 0}
              bars={hero.bars || 0}
              cards={hero.cards}
              distributionCards={hero.distributionCards}
              rank={hero.rank}
              name={heroName}
              element={hero.element}
              maxStars={HeroHelper.getMaxStars(hero.rank)}
              maxBars={HeroHelper.getMaxBars(hero.rank, hero.stars || 0)}
              onAddBar={onAddBar}
              onRemoveBar={onRemoveBar}
              onAddStar={onAddStar}
              onRemoveStar={onRemoveStar}
              onSetCards={onSetCards}
            />
          )
        })}
      </Flex>
    </Flex>
  )
})

export default HeroesGrid
