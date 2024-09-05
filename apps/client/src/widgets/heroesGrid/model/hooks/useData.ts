import { useMemo } from 'react'
import { useGetAllHeroes } from 'entities/hero'
import useHeroes from 'entities/hero/model/hooks/useHeroes'


const useData = () => {
  const heroesQuery = useGetAllHeroes()

  const { heroesParams, onSetCards, onAddBar, onRemoveBar, onRemoveStar, onAddStar } = useHeroes()

  const heroesTotal = useMemo(() => {
    return (heroesQuery.data || []).map((hero) => {
      const heroParam = heroesParams[hero.heroId]
      return {
        ...hero,
        ...heroParam,
      }
    })
  }, [heroesParams, heroesQuery.data])

  return {
    heroes: heroesTotal,

    onAddBar,
    onRemoveBar,
    onAddStar,
    onRemoveStar,
    onSetCards,
  }
}

export default useData
