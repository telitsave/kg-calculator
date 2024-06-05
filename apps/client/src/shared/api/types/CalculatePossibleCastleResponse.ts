import { CastleResources } from './CastleResources'
import { Parameters } from './Parameters'
import { Resources } from './Resources'

export interface CalculatePossibleCastleResponse {
  oldParameters: Parameters
  parameters: Parameters
  sourceResources: Resources
  leftResources: Resources
  spentResources: Resources
  convertedSource: CastleResources
  convertedTarget: CastleResources
  spentBoxesResources: CastleResources
}
