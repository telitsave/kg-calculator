import { useLocalStorage } from '@mantine/hooks'
import type { HeroesDistribution } from 'kg-calculator-typings'


const useHeroDistribution = () =>
  useLocalStorage<HeroesDistribution>({
    key: 'heroesDistribution',
    defaultValue: {},
    serialize: (value) => JSON.stringify(value),
    deserialize: (value) => (value && JSON.parse(value)) || {},
  })

export default useHeroDistribution
