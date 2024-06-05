import { Parameters } from './Parameters'
import { Resources } from './Resources'
import { Settings } from './Settings'

export interface CalculateTotalExtremePowerPayload {
  resources: Resources
  parameters: Parameters
  settings: Settings
}
