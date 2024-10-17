import { useQuery } from '@tanstack/react-query'
import api from 'shared/api'


const useGetHeroesTableSimple = () => {
  return useQuery({
    queryKey: ['heroesTableSimple'],
    queryFn: api.heroes.getHeroesTableSimple,
  })
}

export default useGetHeroesTableSimple
