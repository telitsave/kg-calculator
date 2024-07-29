import { useLocalStorage } from '@mantine/hooks'
import { ResourceType } from '../types'


const useResource = (resourceType: ResourceType) => {
  return useLocalStorage<number>({
    key: resourceType,
    defaultValue: 0,
    getInitialValueInEffect: false,
    serialize: (value) => value.toString(),
    deserialize: (value) => parseInt(value || '0', 10),
  })
}

export default useResource
