import api from '@shared/api'
import { useQuery } from '@tanstack/react-query'

const useGetHeroesTable = () => {
  return useQuery({
    queryKey: ['heroesTable'],
    queryFn: api.heroes.getHeroesTable,
  })
}

export default useGetHeroesTable
