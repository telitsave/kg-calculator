import { BarracksBooksResources } from './BarracksBooksResources'
import { Parameters } from './Parameters'
import { Resources } from './Resources'

export interface CalculateBarracksResponse {
  oldParameters: Parameters
  parameters: Parameters
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
  randomBooksUsed: BarracksBooksResources
  convertBooksForBarracks: BarracksBooksResources
  convertTalentBooks: BarracksBooksResources
  spentTalentBooks: BarracksBooksResources
}
