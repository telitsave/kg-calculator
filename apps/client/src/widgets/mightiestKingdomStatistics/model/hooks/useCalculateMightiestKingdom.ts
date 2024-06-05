import { useQuery } from '@tanstack/react-query'
import { ResourcesData } from 'kg-calculator-typings'
import * as api from '../../api/api'


const useCalculateMightiestKingdom = (resources: ResourcesData) => {
  return useQuery({
    queryKey: ['mightiestKingdom', resources],
    queryFn: () => api.calculateMightiestKingdom({ resources }),
    enabled: !!resources,
  })
}

export default useCalculateMightiestKingdom
