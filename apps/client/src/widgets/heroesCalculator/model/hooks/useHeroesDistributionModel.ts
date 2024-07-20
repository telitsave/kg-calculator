import { useCallback, useMemo } from 'react'
import { readLocalStorageValue } from '@mantine/hooks'
import type { HeroesDistribution } from 'kg-calculator-typings'
import { useGetHeroesInCards, useHeroes } from 'entities/hero'
import { useHeroDistribution } from 'entities/parameter'
import { useResource } from 'entities/resource'


const useHeroesDistributionModel = () => {
  const { data } = useGetHeroesInCards()
  const { heroes } = useHeroes()
  const totalCards = useResource('heroGoldCards')[0]
  const [heroesDistribution, setHeroesDistribution] = useHeroDistribution()

  const getLeftCards = useCallback(
    (heroesDistr: HeroesDistribution) => {
      return totalCards - Object.values(heroesDistr).reduce((total, val) => total + (val || 0), 0)
    },
    [totalCards],
  )

  const leftCards = useMemo(() => {
    return getLeftCards(heroesDistribution)
  }, [heroesDistribution, getLeftCards])

  const handleSetCards = useCallback(
    (heroId: string, cardsAmount: number) => {
      const heroesDistr = readLocalStorageValue<HeroesDistribution>({ key: 'heroesDistribution' })
      const prevCardsAmount = heroesDistr[heroId] || 0
      const left = getLeftCards(heroesDistr)
      if (left + prevCardsAmount >= cardsAmount) {
        setHeroesDistribution((val) => ({ ...val, [heroId]: cardsAmount }))
      }
    },
    [getLeftCards],
  )

  const heroesTotal = useMemo(() => {
    if (!data) return []
    return data.map((hero) => {
      const heroData = heroes.find((it) => it.id === hero.heroId)
      return {
        ...hero,
        ...heroData,
      }
    })
  }, [data, heroes])

  return {
    heroes: heroesTotal,
    heroesDistribution,
    leftCards,
    onSetCards: handleSetCards,
  }
}

export default useHeroesDistributionModel
