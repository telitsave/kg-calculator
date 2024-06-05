import { Parameters } from './Parameters'
import { Resources } from './Resources'

export interface CalculateBlacksmithResponse {
  sourceParameters: Parameters
  parameters: Parameters
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
}
