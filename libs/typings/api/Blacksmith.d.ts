import type { ParametersData } from './ParametersData'
import type { ResourcesData } from './ResourcesData'

export interface BlacksmithParameters {
  level: number
}

export interface BlacksmithResources {
  hammers: number
}

export interface CalculateBlacksmithPayload {
  parameters: ParametersData
  resources: ResourcesData
}

export interface CalculateBlacksmithResponse {
  sourceParameters: ParametersData
  parameters: ParametersData
  sourceResources: ResourcesData
  spentResources: ResourcesData
  leftResources: ResourcesData
}
