import { useMemo } from 'react'
import { useGetAllHeroes } from 'entities/hero'
import useHeroes from 'entities/hero/model/hooks/useHeroes'


const useData = () => {
  const heroesQuery = useGetAllHeroes()

  const { heroes, onSetCards, onAddBar, onRemoveBar, onRemoveStar, onAddStar } = useHeroes()

  const heroesTotal = useMemo(() => {
    if (!heroesQuery.data) return []

    return heroesQuery.data.map((it) => {
      const heroData = heroes.find((hero) => hero.id === it.heroId)
      return {
        ...it,
        ...heroData,
      }
    })
  }, [heroesQuery, heroes])

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
