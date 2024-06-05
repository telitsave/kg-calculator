import { Parameters } from './Parameters'
import { Resources } from './Resources'
import { Settings } from './Settings'

export interface CalculatePossibleCastlePayload {
  resources: Partial<Resources>
  parameters: Partial<Parameters>
  settings: Partial<Settings>
}
