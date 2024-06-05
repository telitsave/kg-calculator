import { Parameters } from './Parameters'
import { Resources } from './Resources'
import { Settings } from './Settings'

export interface CalculatePossibleDragonPayload {
  parameters: Partial<Parameters>
  resources: Partial<Resources>
  settings: Partial<Settings>
}
