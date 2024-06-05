import type { ParametersData } from './ParametersData'
import type { ResourcesData } from './ResourcesData'

export interface CalculateGalleryPayload {
  parameters: ParametersData
  resources: ResourcesData
}

export interface CalculateGalleryResponse {
  sourceParameters: ParametersData
  parameters: ParametersData
  sourceResources: ResourcesData
  spentResources: ResourcesData
  leftResources: ResourcesData
}

export interface GalleryParameters {
  level: number
  step: number
}
