import { useQuery } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculateUltimatePowerTotal = () => {
  return useQuery({
    queryKey: ['ultimatePowerTotal'],
    queryFn: () => api.ultimatePower.calculateTotalUltimatePower(),
  })
}

export default useCalculateUltimatePowerTotal
