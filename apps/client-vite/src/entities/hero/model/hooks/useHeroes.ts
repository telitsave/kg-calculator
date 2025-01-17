import { useCallback, useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { IHeroData, Ranks } from 'kg-calculator-typings'
import api from '@shared/api'
import HeroData from '../HeroData'
import heroesQueue from '../HeroesQueue'


const useHeroes = () => {
  const { data: heroesParams = {} } = useQuery({
    queryKey: ['heroesParams'],
    queryFn: api.heroes.getHeroesParams,
  })

  const saveHero = useCallback((heroId: string, hero: Partial<IHeroData>) => {
    heroesQueue.setHero(heroId, {
      id: heroId,
      stars: hero.stars,
      bars: hero.bars,
      cards: hero.cards,
      distributionCards: hero.distributionCards,
    })
  }, [])

  const handleAddStar = useCallback(
    (heroId: string, rank: Ranks, stars: number, bars: number, cards: number, distributionCards: number) => {
      const heroData = new HeroData(heroId, rank, stars, bars)
      heroData.addStar()
      saveHero(heroData.id, {
        id: heroData.id,
        stars: heroData.stars,
        bars: heroData.bars,
        cards,
        distributionCards,
      })
    },
    [saveHero],
  )

  const handleRemoveStar = useCallback(
    (heroId: string, rank: Ranks, stars: number, bars: number, cards: number, distributionCards: number) => {
      const heroData = new HeroData(heroId, rank, stars, bars)
      heroData.removeStar()
      saveHero(heroData.id, {
        id: heroData.id,
        stars: heroData.stars,
        bars: heroData.bars,
        cards,
        distributionCards,
      })
    },
    [saveHero],
  )

  const handleAddBar = useCallback(
    (heroId: string, rank: Ranks, stars: number, bars: number, cards: number, distributionCards: number) => {
      const heroData = new HeroData(heroId, rank, stars, bars)
      heroData.addBar()
      saveHero(heroData.id, {
        id: heroData.id,
        stars: heroData.stars,
        bars: heroData.bars,
        cards,
        distributionCards,
      })
    },
    [saveHero],
  )

  const handleRemoveBar = useCallback(
    (heroId: string, rank: Ranks, stars: number, bars: number, cards: number, distributionCards: number) => {
      const heroData = new HeroData(heroId, rank, stars, bars)
      heroData.removeBar()
      saveHero(heroData.id, {
        id: heroData.id,
        stars: heroData.stars,
        bars: heroData.bars,
        cards,
        distributionCards,
      })
    },
    [saveHero],
  )

  const handleSetCards = useCallback(
    (heroId: string, stars: number, bars: number, cards: number, distributionCards: number) => {
      saveHero(heroId, {
        id: heroId,
        stars,
        bars,
        cards,
        distributionCards,
      })
    },
    [saveHero],
  )

  const handleSetDistributionCards = useCallback(
    (heroId: string, stars: number, bars: number, cards: number, distributionCards: number) => {
      saveHero(heroId, {
        id: heroId,
        stars,
        bars,
        cards,
        distributionCards,
      })
    },
    [saveHero],
  )

  const usedDistributionCards = useMemo(() => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return Object.values(heroesParams).reduce((total, heroParam) => total + heroParam!.distributionCards, 0)
  }, [heroesParams])

  return {
    heroesParams,
    usedDistributionCards,
    onAddStar: handleAddStar,
    onAddBar: handleAddBar,
    onRemoveStar: handleRemoveStar,
    onRemoveBar: handleRemoveBar,
    onSetCards: handleSetCards,
    onSetDistributionCards: handleSetDistributionCards,
  }
}

export default useHeroes
