import { useCallback } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import type { Ranks } from 'kg-calculator-typings'
import HeroData from '../HeroData'


interface IHeroData {
  id: string
  stars: number
  bars: number
  cards: number
}

const useHeroes = () => {
  const [heroes, setHeroes] = useLocalStorage<IHeroData[]>({
    key: 'heroesData',
    defaultValue: [],
    serialize: (value: IHeroData[]) => JSON.stringify(value),
    deserialize: (value: string | undefined) => JSON.parse(value || '[]') as IHeroData[],
  })

  const handleAddStar = useCallback((heroId: string, rank: Ranks) => {
    setHeroes((val) => {
      let heroData = val.find((it) => it.id === heroId)
      const hero = new HeroData(heroId, rank, heroData?.stars, heroData?.bars, heroData?.cards)
      hero.addStar()
      const newArray = val.filter((it) => it !== heroData)
      newArray.push(hero.getData())

      return newArray
    })
  }, [])

  const handleRemoveStar = useCallback((heroId: string, rank: Ranks) => {
    setHeroes((val) => {
      let heroData = val.find((it) => it.id === heroId)
      const hero = new HeroData(heroId, rank, heroData?.stars, heroData?.bars, heroData?.cards)
      hero.removeStar()
      const newArray = val.filter((it) => it !== heroData)
      newArray.push(hero.getData())

      return newArray
    })
  }, [])

  const handleAddBar = useCallback((heroId: string, rank: Ranks) => {
    setHeroes((val) => {
      let heroData = val.find((it) => it.id === heroId)
      const hero = new HeroData(heroId, rank, heroData?.stars, heroData?.bars, heroData?.cards)
      hero.addBar()
      const newArray = val.filter((it) => it !== heroData)
      newArray.push(hero.getData())

      return newArray
    })
  }, [])

  const handleRemoveBar = useCallback((heroId: string, rank: Ranks) => {
    setHeroes((val) => {
      let heroData = val.find((it) => it.id === heroId)
      const hero = new HeroData(heroId, rank, heroData?.stars, heroData?.bars, heroData?.cards)
      hero.removeBar()
      const newArray = val.filter((it) => it !== heroData)
      newArray.push(hero.getData())

      return newArray
    })
  }, [])

  const handleSetCards = useCallback((cards: number, heroId: string, rank: Ranks) => {
    setHeroes((val) => {
      let heroData = val.find((it) => it.id === heroId)
      const hero = new HeroData(heroId, rank, heroData?.stars, heroData?.bars, heroData?.cards)
      hero.setCards(cards)
      const newArray = val.filter((it) => it !== heroData)
      newArray.push(hero.getData())

      return newArray
    })
  }, [])

  return {
    heroes,
    onAddStar: handleAddStar,
    onAddBar: handleAddBar,
    onRemoveStar: handleRemoveStar,
    onRemoveBar: handleRemoveBar,
    onSetCards: handleSetCards,
  }
}

export default useHeroes
