import type { ResourcesData } from './ResourcesData'
import type { ParametersData } from './ParametersData'
import type { SettingsData } from './SettingsData'

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
  resources:ResourcesData
  parameters: ParametersData
  settings: SettingsData
  goalLevel: number
}

export interface CalculateGoalCastleResponse {
  neededResources: ResourcesData
  requiredResources: ResourcesData
  parameters: ParametersData
  goalLevel: number
}

export interface CalculatePossibleCastlePayload {
  resources: ResourcesData
  parameters: ParametersData
  settings: SettingsData
}

export interface CalculatePossibleCastleResponse {
  oldParameters: ParametersData
  parameters: ParametersData
  sourceResources: ResourcesData
  leftResources: ResourcesData
  spentResources: ResourcesData
  convertedSource: CastleResources
  convertedTarget: CastleResources
  spentBoxesResources: CastleResources
}
