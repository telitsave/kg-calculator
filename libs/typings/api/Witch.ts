import type { Resources } from './Inventory'
import type { Parameters } from './Parameters'


export interface CalculateWitchResponse {
  oldParameters: Parameters
  newParameters: Parameters
  oldGemsParameters: Record<string, number>
  newGemsParameters: Record<string, number>
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
}

export interface WitchParameters {
  lightLevel: number
  darkLevel: number
  gems: {
    1: GemsRankParameters
    2: GemsRankParameters
    3: GemsRankParameters
    4: GemsRankParameters
    5: GemsRankParameters
    6: GemsRankParameters
    7: GemsRankParameters
    8: GemsRankParameters
    9: GemsRankParameters
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
