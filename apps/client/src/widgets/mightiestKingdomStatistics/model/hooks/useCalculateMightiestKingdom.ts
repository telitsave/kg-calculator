import { useQuery } from '@tanstack/react-query'
import { Resources } from 'shared/api'
import * as api from '../../api/api'

const useCalculateMightiestKingdom = (resources: Partial<Resources>) => {
  return useQuery({
    queryKey: ['mightiestKingdom', resources],
    queryFn: () => api.calculateMightiestKingdom({ resources }),
    enabled: !!resources,
  })
}

export default useCalculateMightiestKingdom
