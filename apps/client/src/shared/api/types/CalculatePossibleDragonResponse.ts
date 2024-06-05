import { DragonRunesResources } from './DragonRunesResources'
import { Parameters } from './Parameters'
import { Resources } from './Resources'

export interface CalculatePossibleDragonResponse {
  oldParameters: Parameters
  newParameters: Parameters
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
  spentBoxesResources: DragonRunesResources
}
