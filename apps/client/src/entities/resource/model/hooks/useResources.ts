import { useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { ResourceType } from 'kg-calculator-typings'
import api from 'shared/api'
import resourcesQueue from '../ResourcesQueue'


const useResources = () => {
  const { data } = useQuery({
    queryKey: ['resources'],
    queryFn: api.inventory.getInventory,
  })

  const saveResources = useCallback((resourceType: ResourceType, count: number) => {
    resourcesQueue.setResource(resourceType, count)
  }, [])

  return { resources: data, saveResources }
}

export default useResources
