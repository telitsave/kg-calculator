import { Parameters } from './Parameters'
import { Resources } from './Resources'

export interface CalculateGalleryResponse {
  sourceParameters: Parameters
  parameters: Parameters
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
}
