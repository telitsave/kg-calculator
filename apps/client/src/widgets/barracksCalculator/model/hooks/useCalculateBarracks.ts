import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculateBarracks = () => {
  return useMutation({
    mutationKey: ['calculateBarracks'],
    mutationFn: api.barracks.calculateBarracks,
  })
}

export default useCalculateBarracks
