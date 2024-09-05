import type { Resources } from './Inventory'
import type { Parameters } from './Parameters'


export interface BlacksmithParameters {
  level: number
}

export interface BlacksmithResources {
  hammers: number
}

export interface CalculateBlacksmithResponse {
  sourceParameters: Parameters
  parameters: Parameters
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
}
