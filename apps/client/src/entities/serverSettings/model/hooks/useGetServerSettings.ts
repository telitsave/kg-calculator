import { useQuery } from '@tanstack/react-query'
import api from 'shared/api'


const useGetServerSettings = () =>
  useQuery({
    queryKey: ['getServerSettings'],
    queryFn: api.serverSettings.getServerSettings,
  })

export default useGetServerSettings
