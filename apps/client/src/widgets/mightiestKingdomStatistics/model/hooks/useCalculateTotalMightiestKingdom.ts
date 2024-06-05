import { useQuery } from '@tanstack/react-query'
import { useSettings } from 'entities/calculationSettings'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import * as api from '../../api/api'


const useCalculateTotalMightiestKingdom = () => {
  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  return useQuery({
    queryKey: ['mightiestKingdomTotal', resources, settings],
    queryFn: () =>
      api.calculateTotalMightiestKingdom({
        resources,
        parameters,
        settings,
      }),
    enabled: !!resources,
  })
}

export default useCalculateTotalMightiestKingdom
