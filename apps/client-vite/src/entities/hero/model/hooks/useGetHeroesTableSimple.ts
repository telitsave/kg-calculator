import api from '@shared/api'
import { useQuery } from '@tanstack/react-query'

const useGetHeroesTableSimple = () => {
  return useQuery({
    queryKey: ['heroesTableSimple'],
    queryFn: api.heroes.getHeroesTableSimple,
  })
}

export default useGetHeroesTableSimple
