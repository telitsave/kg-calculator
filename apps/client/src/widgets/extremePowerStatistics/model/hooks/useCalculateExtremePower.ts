import { useQuery } from '@tanstack/react-query'
import type { ResourcesData } from 'kg-calculator-typings'
import { useServerSettings } from 'entities/serverSettings'
import api from 'shared/api'


const useCalculateExtremePower = (resources: ResourcesData) => {
  const { customServerSettings } = useServerSettings()

  return useQuery({
    queryKey: ['extremePower', resources, customServerSettings],
    queryFn: () =>
      api.extremePower.calculateExtremePower({
        resources,
        customServerSettings,
      }),
    enabled: !!resources,
  })
}

export default useCalculateExtremePower
