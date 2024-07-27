import { useQuery } from '@tanstack/react-query'
import { useSettings } from 'entities/calculationSettings'
import { useHeroes } from 'entities/hero'
import { useParameters } from 'entities/parameter'
import { useResources } from 'entities/resource'
import { useServerSettings } from 'entities/serverSettings'
import api from 'shared/api'
import useHeroesDistributionModel from '../../../heroesCalculator/model/hooks/useHeroesDistributionModel'


const useCalculateTotalExtremePower = () => {
  const resources = useResources()
  const parameters = useParameters()
  const settings = useSettings()
  const { heroes } = useHeroes()
  const { heroesDistribution } = useHeroesDistributionModel()
  const { serverSettings, enabledCustomServerSettings } = useServerSettings()

  return useQuery({
    queryKey: ['extremePowerTotal', resources, settings],
    queryFn: () =>
      api.extremePower.calculateTotalExtremePower({
        resources,
        parameters,
        settings,
        heroesData: heroes,
        heroesDistribution,
        customServerSettings: enabledCustomServerSettings ? serverSettings : undefined,
      }),
    enabled: !!resources,
  })
}

export default useCalculateTotalExtremePower
