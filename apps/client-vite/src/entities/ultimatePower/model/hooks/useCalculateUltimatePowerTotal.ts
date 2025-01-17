import api from '@shared/api'
import { useQuery } from '@tanstack/react-query'

const useCalculateUltimatePowerTotal = () => {
  return useQuery({
    queryKey: ['ultimatePowerTotal'],
    queryFn: () => api.ultimatePower.calculateTotalUltimatePower(),
  })
}

export default useCalculateUltimatePowerTotal
