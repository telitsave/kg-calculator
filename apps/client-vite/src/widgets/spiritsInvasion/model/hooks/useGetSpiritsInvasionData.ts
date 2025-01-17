import api from '@shared/api'
import { useMutation } from '@tanstack/react-query'

const useGetSpiritsInvasionData = () => {
  return useMutation({
    mutationKey: ['getSpiritsInvasionData'],
    mutationFn: api.spiritsInvasion.getSpiritsInvasionData,
  })
}

export default useGetSpiritsInvasionData
