import type { Resources } from './Inventory'
import type { Parameters } from './Parameters'


export interface CalculateGalleryResponse {
  sourceParameters: Parameters
  parameters: Parameters
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
}

export interface GalleryParameters {
  level: number
  step: number
}
