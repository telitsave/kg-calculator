import { useQuery } from '@tanstack/react-query'
import type { ResourcesData } from 'kg-calculator-typings/api/ResourcesData'
import * as api from '../../api/api'


const useCalculateExtremePower = (resources: ResourcesData) => {
  return useQuery({
    queryKey: ['extremePower', resources],
    queryFn: () => api.calculateExtremePower({ resources }),
    enabled: !!resources,
  })
}

export default useCalculateExtremePower
