import { useMutation } from '@tanstack/react-query'
import api from 'shared/api'


const useGetSpiritsInvasionData = () => {
  return useMutation({
    mutationKey: ['getSpiritsInvasionData'],
    mutationFn: api.spiritsInvasion.getSpiritsInvasionData,
  })
}

export default useGetSpiritsInvasionData
