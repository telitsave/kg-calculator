import { useMutation } from '@tanstack/react-query'
import * as api from '../../api/api'

const useCalculateBlacksmith = () => {
  return useMutation({
    mutationKey: ['calculateBlacksmith'],
    mutationFn: api.calculateBlacksmith,
  })
}

export default useCalculateBlacksmith
