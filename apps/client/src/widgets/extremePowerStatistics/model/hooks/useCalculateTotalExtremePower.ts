import { useQuery } from '@tanstack/react-query'
import { useSettings } from 'entities/calculationSettings'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import api from 'shared/api'


const useCalculateTotalExtremePower = () => {
  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  return useQuery({
    queryKey: ['extremePowerTotal', resources, settings],
    queryFn: () =>
      api.extremePower.calculateTotalExtremePower({
        resources,
        parameters,
        settings,
      }),
    enabled: !!resources,
  })
}

export default useCalculateTotalExtremePower
