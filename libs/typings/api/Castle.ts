import type { Resources } from './Inventory'
import type { Parameters } from './Parameters'


export interface CastleParameters {
  level: number
}

export interface CastleResources {
  stone: number
  wood: number
  steel: number
  boxes: number
}

export interface CalculateGoalCastlePayload {
  goalLevel: number
}

export interface CalculateGoalCastleResponse {
  neededResources: Resources
  requiredResources: Resources
  parameters: Parameters
  goalLevel: number
}

export interface CalculatePossibleCastleResponse {
  oldParameters: Parameters
  parameters: Parameters
  sourceResources: Resources
  leftResources: Resources
  spentResources: Resources
  convertedSource: Resources
  convertedTarget: Resources
  spentBoxesResources: Resources
}
