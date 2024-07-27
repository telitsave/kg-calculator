import { useQuery } from '@tanstack/react-query'
import type { ResourcesData } from 'kg-calculator-typings'
import { useServerSettings } from 'entities/serverSettings'
import api from 'shared/api'


const useCalculateExtremePower = (resources: ResourcesData) => {
  const { serverSettings, enabledCustomServerSettings } = useServerSettings()
  
  return useQuery({
    queryKey: ['extremePower', resources],
    queryFn: () =>
      api.extremePower.calculateExtremePower({
        resources,
        customServerSettings: enabledCustomServerSettings ? serverSettings : undefined,
      }),
    enabled: !!resources,
  })
}

export default useCalculateExtremePower
