import { useLocalStorage } from '@mantine/hooks'
import { ParameterTypes } from '../types'


const useParameter = (type: ParameterTypes, defaultValue = 0) =>
  useLocalStorage<number>({
    key: type,
    defaultValue,
    getInitialValueInEffect: false,
    serialize: (value) => value.toString(),
    deserialize: (value) => parseInt(value || defaultValue.toString(), 10),
  })

export default useParameter
