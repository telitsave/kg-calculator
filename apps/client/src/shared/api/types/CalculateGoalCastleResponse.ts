import { Parameters } from './Parameters'
import { Resources } from './Resources'

export interface CalculateGoalCastleResponse {
  neededResources: Resources
  requiredResources: Resources
  parameters: Parameters
  goalLevel: number
}
