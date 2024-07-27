import { useQuery } from '@tanstack/react-query'
import type { ResourcesData } from 'kg-calculator-typings'
import { useServerSettings } from 'entities/serverSettings'
import api from 'shared/api'


const useCalculateMightiestKingdom = (resources: ResourcesData) => {
  const { serverSettings, enabledCustomServerSettings } = useServerSettings()

  return useQuery({
    queryKey: ['mightiestKingdom', resources],
    queryFn: () =>
      api.mightiestKingdom.calculateMightiestKingdom({
        resources,
        customServerSettings: enabledCustomServerSettings ? serverSettings : undefined,
      }),
    enabled: !!resources,
  })
}

export default useCalculateMightiestKingdom
