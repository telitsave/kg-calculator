import { useQuery } from '@tanstack/react-query'
import { useSettings } from 'entities/calculationSettings'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import * as api from '../../api/api'


const useCalculateTotalExtremePower = () => {
  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  return useQuery({
    queryKey: ['extremePowerTotal', resources, settings],
    queryFn: () =>
      api.calculateTotalExtremePower({
        resources,
        parameters,
        settings,
      }),
    enabled: !!resources,
  })
}

export default useCalculateTotalExtremePower
