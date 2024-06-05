import { Parameters } from './Parameters'
import { Resources } from './Resources'

export interface CalculateWitchPayload {
  parameters: Partial<Parameters>
  resources: Partial<Resources>
}
