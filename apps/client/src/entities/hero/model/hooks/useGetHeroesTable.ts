import { useQuery } from '@tanstack/react-query'
import api from 'shared/api'


const useGetHeroesTable = () => {
  return useQuery({
    queryKey: ['heroesTable'],
    queryFn: api.heroes.getHeroesTable,
  })
}

export default useGetHeroesTable
