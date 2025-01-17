import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'

const useCalculateDragon = () => {
  return useMutation({
    mutationKey: ['calculateDragonEmblems'],
    mutationFn: api.dragon.calculateDragonRunes,
  })
}

export default useCalculateDragon
