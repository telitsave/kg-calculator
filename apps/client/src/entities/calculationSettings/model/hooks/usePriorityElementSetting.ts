import { useLocalStorage } from '@mantine/hooks'
import { ElementsType } from '../types'

const usePriorityElementSetting = () =>
  useLocalStorage<ElementsType>({
    key: 'priorityElement',
    defaultValue: 'bow',
    serialize: (value) => value.toString(),
    deserialize: (value) => value as ElementsType,
  })

export default usePriorityElementSetting
