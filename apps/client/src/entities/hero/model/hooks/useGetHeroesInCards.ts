import { useQuery } from '@tanstack/react-query'
import api from 'shared/api'
import { useServerSettings } from '../../../serverSettings'


const useGetHeroesInCards = () => {
  // TODO: настройки должны поступать в хук извне, т.к. появилась связность между разными Entity
  const { customServerSettings } = useServerSettings()
  return useQuery({
    queryFn: () =>
      api.heroes.getHeroesInCards({
        customServerSettings,
      }),
    queryKey: ['heroesInCards', customServerSettings],
  })
}

export default useGetHeroesInCards
