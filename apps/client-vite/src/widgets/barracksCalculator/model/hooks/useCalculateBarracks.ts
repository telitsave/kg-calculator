import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'

const useCalculateBarracks = () => {
  return useMutation({
    mutationKey: ['calculateBarracks'],
    mutationFn: api.barracks.calculateBarracks,
  })
}

export default useCalculateBarracks
