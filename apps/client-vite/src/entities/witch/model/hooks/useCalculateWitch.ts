import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'

const useCalculateWitch = () => {
  return useMutation({
    mutationKey: ['calculateWitch'],
    mutationFn: api.witch.calculateWitch,
  })
}

export default useCalculateWitch
