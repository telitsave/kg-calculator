import type { Resources } from './Inventory'
import type { Parameters } from './Parameters'


export interface CalculatePossibleDragonResponse {
  oldParameters: Parameters
  newParameters: Parameters
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
  spentBoxesResources: Resources
  castleLimit?: number
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
