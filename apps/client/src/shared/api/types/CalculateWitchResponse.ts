import { Parameters } from './Parameters'
import { Resources } from './Resources'

export interface CalculateWitchResponse {
  oldParameters: Parameters
  newParameters: Parameters
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
}
