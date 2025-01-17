import api from '@shared/api'
import { useQuery } from '@tanstack/react-query'

const useCalculateTotalMightiestKingdom = () => {
  return useQuery({
    queryKey: ['mightiestKingdomTotal'],
    queryFn: () => api.mightiestKingdom.calculateTotalMightiestKingdom(),
  })
}

export default useCalculateTotalMightiestKingdom
