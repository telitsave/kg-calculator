import { useMutation } from '@tanstack/react-query'
import * as api from '../../api/api'

const useCalculateDragon = () => {
  return useMutation({
    mutationKey: ['calculateDragonEmblems'],
    mutationFn: api.calculateDragonRunes,
  })
}

export default useCalculateDragon
