import { Parameters } from './Parameters'
import { Resources } from './Resources'

export interface CalculateGoalCastlePayload {
  resources: Partial<Resources>
  parameters: Partial<Parameters>
  goalLevel: number
}
