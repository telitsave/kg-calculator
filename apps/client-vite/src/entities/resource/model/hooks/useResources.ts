import resourcesQueue from '../ResourcesQueue'
import api from '@shared/api'
import { useQuery } from '@tanstack/react-query'
import type { ResourceType } from 'kg-calculator-typings'
import { useCallback } from 'react'

const useResources = () => {
  const { data } = useQuery({
    queryKey: ['resources'],
    queryFn: api.inventory.getInventory,
  })

  const saveResources = useCallback((resourceType: ResourceType, count: number | string) => {
    resourcesQueue.setResource(resourceType, count)
  }, [])

  return { resources: data, saveResources }
}

export default useResources
