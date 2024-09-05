import { useCallback } from 'react'
import type { ResourceType } from 'kg-calculator-typings'
import useResources from './useResources'


const useResource = (resourceType: ResourceType): [number | undefined, (val: number) => void] => {
  const { resources, saveResources } = useResources()

  const handleSetResource = useCallback(
    (value: number) => {
      saveResources(resourceType, value)
    },
    [saveResources],
  )

  return [resources !== undefined ? resources[resourceType] : undefined, handleSetResource]
}

export default useResource
