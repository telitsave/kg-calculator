import { useMutation } from '@tanstack/react-query'
import * as api from '../../api/api'

const useCalculateBarracks = () => {
  return useMutation({
    mutationKey: ['calculateBarracks'],
    mutationFn: api.calculateBarracks,
  })
}

export default useCalculateBarracks
