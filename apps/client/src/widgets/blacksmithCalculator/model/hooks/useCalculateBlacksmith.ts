import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculateBlacksmith = () => {
  return useMutation({
    mutationKey: ['calculateBlacksmith'],
    mutationFn: api.blacksmith.calculateBlacksmith,
  })
}

export default useCalculateBlacksmith
