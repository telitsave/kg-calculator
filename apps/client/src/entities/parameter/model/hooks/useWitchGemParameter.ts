import { useLocalStorage } from '@mantine/hooks'
import { Ranks } from '../types'


const useWitchGemParameter = (rank: Ranks, gem: number) =>
  useLocalStorage<number>({
    key: `gem-${rank}-${gem}`,
    defaultValue: 0,
    getInitialValueInEffect: false,
    serialize: (value) => value.toString(),
    deserialize: (value) => parseInt(value || '0', 10),
  })

export default useWitchGemParameter
