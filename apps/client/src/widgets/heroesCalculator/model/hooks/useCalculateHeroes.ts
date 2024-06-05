import { useMutation } from '@tanstack/react-query'
import * as api from '../../api/api'


const useCalculateHeroes = () => {
  return useMutation({
    mutationKey: ['calculateHeroes'],
    mutationFn: api.calculateHeroes,
  })
}

export default useCalculateHeroes
