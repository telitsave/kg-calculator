import { useLocalStorage } from '@mantine/hooks'
import { BarracksElements } from '../types'

const useTalentParameter = (element: BarracksElements, rank: string, param: 'books' | 'crowns') =>
  useLocalStorage<number>({
    key: `talent-${element}-${rank}-${param}`,
    defaultValue: 0,
    serialize: (value) => value.toString(),
    deserialize: (value) => parseInt(value || '0', 10),
  })

export default useTalentParameter
