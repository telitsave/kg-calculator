import { useQuery } from '@tanstack/react-query'
import type { ResourcesData } from 'kg-calculator-typings'
import { useServerSettings } from 'entities/serverSettings'
import api from 'shared/api'


const useCalculateMightiestKingdom = (resources: ResourcesData) => {
  const { customServerSettings } = useServerSettings()
  
  return useQuery({
    queryKey: ['mightiestKingdom', resources, customServerSettings],
    queryFn: () =>
      api.mightiestKingdom.calculateMightiestKingdom({
        resources,
        customServerSettings,
      }),
    enabled: !!resources,
  })
}

export default useCalculateMightiestKingdom
