import { useLocalStorage } from '@mantine/hooks'
import type { ElementsType } from 'kg-calculator-typings'

const usePriorityElementSetting = () =>
  useLocalStorage<ElementsType>({
    key: 'priorityElement',
    defaultValue: 'bow',
    serialize: (value) => value.toString(),
    deserialize: (value) => value as ElementsType,
  })

export default usePriorityElementSetting
