import { useCallback, useEffect, useMemo } from 'react'
import { HeroHelper, useGetAllHeroes, useHeroes } from 'entities/hero'
import { useResource } from 'entities/resource'
import { useServerSettings } from 'entities/serverSettings'


type IHeroData = ReturnType<typeof HeroHelper.upStarsBars> & { id: string }

const useHeroesDistributionModel = () => {
  const { data: heroes = [] } = useGetAllHeroes()
  const { heroesParams, usedDistributionCards, onSetDistributionCards } = useHeroes()
  const totalCards = useResource('heroesResources_ssr')[0] || 0
  const {
    serverSettings: { season = 0 },
  } = useServerSettings()

  const handleSetCards = useCallback(
    (
      heroId: string,
      stars: number,
      bars: number,
      cards: number,
      distributionCards: number,
      newDistributionCards: number,
    ) => {
      const prevCardsAmount = distributionCards
      const leftCards = Number(localStorage.getItem('leftCards'))
      if (leftCards + prevCardsAmount >= newDistributionCards) {
        onSetDistributionCards(heroId, stars, bars, cards, newDistributionCards)
      }
    },
    [onSetDistributionCards],
  )
  const handleResetDistributionCards = useCallback(() => {
    Object.values(heroesParams)
      .filter((it) => it!.distributionCards > 0)
      .forEach((heroParam) => {
        onSetDistributionCards(heroParam!.id, heroParam!.stars, heroParam!.bars, heroParam!.cards, 0)
      })
  }, [heroesParams])

  const heroesTotal = useMemo(() => {
    return heroes
      .map((hero) => {
        const heroParam = heroesParams[hero.heroId]
        return {
          ...hero,
          ...heroParam,
        }
      })
      .filter((it) => it.rank === 'ssr' && it.season !== undefined && it.season <= (season || 0))
  }, [heroesParams, heroes, season])

  const fillStars = useCallback(() => {
    const sourceHeroes: Record<string, (typeof heroesTotal)[0]> = {}
    const heroesMap: Record<string, IHeroData> = {}
    const upHeroesCards: Record<string, number> = {}
    heroesTotal
      .filter((it) => (it.stars || 0) < HeroHelper.getMaxStars(it.rank))
      .forEach((hero) => {
        const { stars = 0, bars = 0, cards = 0, distributionCards = 0, rank, heroId } = hero
        const data = HeroHelper.upStarsBars(stars, bars, cards + distributionCards, rank)
        heroesMap[heroId] = { ...data, id: heroId }
        sourceHeroes[heroId] = hero
      })
    let left = totalCards - usedDistributionCards

    let minHero = Object.values(heroesMap).reduce((prev: IHeroData | null, current) => {
      if (prev === null) return current
      return prev.neededCardsForNextStar < current.neededCardsForNextStar ? prev : current
    }, null) as IHeroData

    while (left > 0 && minHero.neededCardsForNextStar <= left) {
      const { id, oldBars, oldStars, rank, leftCards, spentCards, neededCardsForNextStar } = minHero
      const newData = HeroHelper.upStarsBars(oldStars, oldBars, leftCards + spentCards + neededCardsForNextStar, rank)
      heroesMap[id] = { ...newData, id }
      upHeroesCards[id] = newData.spentCards + 1
      left -= neededCardsForNextStar

      minHero = Object.values(heroesMap).reduce((prev: IHeroData | null, current) => {
        if (prev === null) return current
        return prev.neededCardsForNextStar < current.neededCardsForNextStar ? prev : current
      }, null) as IHeroData
    }

    Object.entries(upHeroesCards).forEach(([heroId, spentCards]) => {
      const { stars = 0, bars = 0, cards = 0 } = sourceHeroes[heroId]
      onSetDistributionCards(heroId, stars, bars, cards, spentCards - cards)
    })
  }, [heroesTotal, season, onSetDistributionCards, totalCards, usedDistributionCards])

  useEffect(() => {
    localStorage.setItem('leftCards', (totalCards - usedDistributionCards).toString())
  }, [totalCards, usedDistributionCards])

  return {
    heroes: heroesTotal,
    leftCards: totalCards - usedDistributionCards,
    fillStars,
    onSetCards: handleSetCards,
    onReset: handleResetDistributionCards,
  }
}

export default useHeroesDistributionModel
