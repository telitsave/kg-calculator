import { useQuery } from '@tanstack/react-query'
import { Resources } from 'shared/api'
import * as api from '../../api/api'

const useCalculateExtremePower = (resources: Partial<Resources>) => {
  return useQuery({
    queryKey: ['extremePower', resources],
    queryFn: () => api.calculateExtremePower({ resources }),
    enabled: !!resources,
  })
}

export default useCalculateExtremePower
