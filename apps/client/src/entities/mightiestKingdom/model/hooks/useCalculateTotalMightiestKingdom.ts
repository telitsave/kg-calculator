import { useQuery } from '@tanstack/react-query'
import api from 'shared/api'


const useCalculateTotalMightiestKingdom = () => {
  return useQuery({
    queryKey: ['mightiestKingdomTotal'],
    queryFn: () => api.mightiestKingdom.calculateTotalMightiestKingdom(),
  })
}

export default useCalculateTotalMightiestKingdom
