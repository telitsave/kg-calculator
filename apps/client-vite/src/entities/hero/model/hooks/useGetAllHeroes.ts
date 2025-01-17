import api from '@shared/api'
import { useQuery } from '@tanstack/react-query'

const useGetAllHeroes = () =>
  useQuery({
    queryKey: ['getAllHeroes'],
    queryFn: api.heroes.getAllHeroes,
  })

export default useGetAllHeroes
