import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculateHeroes = () => {
  return useMutation({
    mutationKey: ['calculateHeroes'],
    mutationFn: api.heroes.calculateHeroes,
  })
}

export default useCalculateHeroes
