import { useQuery } from '@tanstack/react-query'
import api from 'shared/api'
import { useServerSettings } from '../../../serverSettings'


const useGetHeroesInCards = () => {
  // TODO: настройки должны поступать в хук извне, т.к. появилась связность между разными Entity
  const { serverSettings, enabledCustomServerSettings } = useServerSettings()
  return useQuery({
    queryFn: () =>
      api.heroes.getHeroesInCards({
        customServerSettings: enabledCustomServerSettings ? serverSettings : undefined,
      }),
    queryKey: ['heroesInCards', enabledCustomServerSettings, serverSettings],
  })
}

export default useGetHeroesInCards
