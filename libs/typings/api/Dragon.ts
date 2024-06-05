import type { ParametersData } from './ParametersData'
import type { ResourcesData } from './ResourcesData'
import type { SettingsData } from './SettingsData'

export interface CalculatePossibleDragonPayload {
  parameters: ParametersData
  resources: ResourcesData
  settings: SettingsData
}

export interface CalculatePossibleDragonResponse {
  oldParameters: ParametersData
  newParameters: ParametersData
  sourceResources: ResourcesData
  spentResources: ResourcesData
  leftResources: ResourcesData
  spentBoxesResources: DragonRunesResources
}

export interface DragonEmblemParameters {
  green: number
  blue: number
  purple: number
  gold: number
}

export interface DragonRunesResources {
  green: number
  blue: number
  purple: number
  gold: number
  boxes: number
}
