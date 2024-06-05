import { useLocalStorage } from '@mantine/hooks'
import { SettingsTypes } from '../types'

const useSetting = (type: SettingsTypes) =>
  useLocalStorage<boolean>({
    key: type,
    defaultValue: false,
    serialize: (value) => value.toString(),
    deserialize: (value) => value === 'true',
  })

export default useSetting
