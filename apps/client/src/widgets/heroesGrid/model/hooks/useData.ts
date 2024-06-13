import { useGetAllHeroes } from 'entities/hero'

const useData = () => {
  const heroesQuery = useGetAllHeroes()

  return {
    heroes: heroesQuery.data || [],
  }
}

export default useData
