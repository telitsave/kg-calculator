import type { Resources } from './Inventory'
import type { Parameters } from './Parameters'


export interface BarracksBooksByElement {
  rank1: number
  rank2: number
  rank3: number
  rank4: number
}

export interface BarracksBooksResources {
  bow: BarracksBooksByElement
  fire: BarracksBooksByElement
  ice: BarracksBooksByElement
  poison: BarracksBooksByElement
  random: number
}

export interface BarracksParameters {
  bowRank: number
  bowLevel: number
  fireRank: number
  fireLevel: number
  iceRank: number
  iceLevel: number
  poisonRank: number
  poisonLevel: number
}

export interface CalculateBarracksResponse {
  oldParameters: Parameters
  parameters: Parameters
  oldTalentParameters: Record<string, number>
  newTalentParameters: Record<string, number>
  sourceResources: Resources
  spentResources: Resources
  leftResources: Resources
  randomBooksUsed: Resources
  convertBooksForBarracks: Resources
  convertTalentBooks: Resources
  spentTalentBooks: Resources
}
