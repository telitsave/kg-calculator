import { useQuery } from '@tanstack/react-query'
import type { ResourcesData } from 'kg-calculator-typings'
import api from 'shared/api'


const useCalculateExtremePower = (resources: ResourcesData) => {
  return useQuery({
    queryKey: ['extremePower', resources],
    queryFn: () => api.extremePower.calculateExtremePower({ resources }),
    enabled: !!resources,
  })
}

export default useCalculateExtremePower
