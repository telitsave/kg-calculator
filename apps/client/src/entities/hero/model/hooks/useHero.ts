import { useCallback, useMemo } from 'react'
import { useLocalStorage } from '@mantine/hooks'
import type { Ranks } from 'kg-calculator-typings'
import HeroHelper from '../../libs/HeroHelper'


const useHero = (heroId: string, heroRank: Ranks) => {
  const [hero, setHero] = useLocalStorage({
    key: heroId,
    defaultValue: { stars: 0, bars: 0, level: 1, cards: 0 },
  })

  const maxStars = useMemo(() => HeroHelper.getMaxStars(heroRank), [heroRank])
  const maxBars = useMemo(() => HeroHelper.getMaxBars(heroRank, hero.stars), [hero])

  const handleSetStars = useCallback(
    (value: number | string) => {
      const valueNum = Number(value)
      setHero((val) => ({
        ...val,
        stars: valueNum < 0 ? 0 : valueNum > maxStars ? maxStars : valueNum,
      }))
    },
    [maxStars],
  )

  const handleSetBars = useCallback(
    (value: number | string) => {
      const valueNum = Number(value)
      setHero((val) => ({
        ...val,
        bars: valueNum < 0 ? 0 : valueNum > maxBars - 1 ? maxBars - 1 : valueNum,
      }))
    },
    [maxBars],
  )

  const handleSetLevel = useCallback((value: number | string) => {
    const valueNum = Number(value)
    setHero((val) => ({
      ...val,
      level: valueNum < 0 ? 0 : valueNum,
    }))
  }, [])

  const handleSetCards = useCallback((value: number | string) => {
    const valueNum = Number(value)
    setHero((val) => ({
      ...val,
      cards: valueNum < 0 ? 0 : valueNum,
    }))
  }, [])

  return {
    hero,
    onSetStars: handleSetStars,
    onSetBars: handleSetBars,
    onSetLevel: handleSetLevel,
    onSetCards: handleSetCards,
  }
}

export default useHero
