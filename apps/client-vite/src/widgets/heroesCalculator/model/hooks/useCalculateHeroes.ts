import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'

const useCalculateHeroes = () => {
  return useMutation({
    mutationKey: ['calculateHeroes'],
    mutationFn: api.heroes.calculateHeroes,
  })
}

export default useCalculateHeroes
