import { useQuery } from '@tanstack/react-query'
import api from 'shared/api'


const useGetAllHeroes = () =>
  useQuery({
    queryKey: ['getAllHeroes'],
    queryFn: api.heroes.getAllHeroes,
  })

export default useGetAllHeroes
