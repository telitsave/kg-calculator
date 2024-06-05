import type { ParametersData } from './ParametersData'
import type { ResourcesData } from './ResourcesData'

export interface CalculateWitchPayload {
  parameters: ParametersData
  resources: ResourcesData
}

export interface CalculateWitchResponse {
  oldParameters: ParametersData
  newParameters: ParametersData
  sourceResources: ResourcesData
  spentResources: ResourcesData
  leftResources: ResourcesData
}

export interface WitchParameters {
  lightLevel: number
  darkLevel: number
  gems: {
    rank1: GemsRankParameters
    rank2: GemsRankParameters
    rank3: GemsRankParameters
    rank4: GemsRankParameters
    rank5: GemsRankParameters
    rank6: GemsRankParameters
    rank7: GemsRankParameters
    rank8: GemsRankParameters
  }
}

export interface WitchResources {
  lightReagents: number
  greenWitchPotion: number
  purpleWitchPotion: number
}

export interface GemsRankParameters {
  sapphire: number
  ruby: number
  malachite: number
  amethyst: number
  amber: number
  emerald: number
}
