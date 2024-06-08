import { useQuery } from '@tanstack/react-query'
import type { ResourcesData } from 'kg-calculator-typings'
import api from 'shared/api'


const useCalculateMightiestKingdom = (resources: ResourcesData) => {
  return useQuery({
    queryKey: ['mightiestKingdom', resources],
    queryFn: () => api.mightiestKingdom.calculateMightiestKingdom({ resources }),
    enabled: !!resources,
  })
}

export default useCalculateMightiestKingdom
