import { useLocalStorage } from '@mantine/hooks'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'


const useTalentParameter = (element: ElementsType, rank: string, param: 'books' | 'crowns') =>
  useLocalStorage<number>({
    key: `talent-${element}-${rank}-${param}`,
    defaultValue: 0,
    serialize: (value) => value.toString(),
    deserialize: (value) => parseInt(value || '0', 10),
  })

export default useTalentParameter
