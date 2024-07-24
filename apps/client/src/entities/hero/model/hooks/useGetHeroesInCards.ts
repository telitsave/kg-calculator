import { useQuery } from '@tanstack/react-query'
import api from 'shared/api'


const useGetHeroesInCards = () =>
  useQuery({
    queryFn: api.heroes.getHeroesInCards,
    queryKey: ['heroesInCards'],
  })

export default useGetHeroesInCards
