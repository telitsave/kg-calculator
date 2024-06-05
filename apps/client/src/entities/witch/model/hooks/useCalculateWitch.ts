import { useMutation } from '@tanstack/react-query'
import * as api from '../../api/api'

const useCalculateWitch = () => {
  return useMutation({
    mutationKey: ['calculateWitch'],
    mutationFn: api.calculateWitch,
  })
}

export default useCalculateWitch
