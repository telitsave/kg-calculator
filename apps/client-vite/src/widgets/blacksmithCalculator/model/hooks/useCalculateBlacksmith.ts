import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'

const useCalculateBlacksmith = () => {
  return useMutation({
    mutationKey: ['calculateBlacksmith'],
    mutationFn: api.blacksmith.calculateBlacksmith,
  })
}

export default useCalculateBlacksmith
