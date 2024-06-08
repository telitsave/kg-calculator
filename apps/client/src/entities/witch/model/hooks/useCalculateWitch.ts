import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculateWitch = () => {
  return useMutation({
    mutationKey: ['calculateWitch'],
    mutationFn: api.witch.calculateWitch,
  })
}

export default useCalculateWitch
