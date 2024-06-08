import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculateDragon = () => {
  return useMutation({
    mutationKey: ['calculateDragonEmblems'],
    mutationFn: api.dragon.calculateDragonRunes,
  })
}

export default useCalculateDragon
