import type { ParametersData } from './ParametersData'
import type { ResourcesData } from './ResourcesData'
import type { CustomServerSettingsData, SettingsData } from './SettingsData'


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

export interface CalculateBarracksPayload {
  resources: ResourcesData
  parameters: ParametersData
  settings: SettingsData
  customServerSettings?: CustomServerSettingsData
}

export interface CalculateBarracksResponse {
  oldParameters: ParametersData
  parameters: ParametersData
  sourceResources: ResourcesData
  spentResources: ResourcesData
  leftResources: ResourcesData
  randomBooksUsed: BarracksBooksResources
  convertBooksForBarracks: BarracksBooksResources
  convertTalentBooks: BarracksBooksResources
  spentTalentBooks: BarracksBooksResources
}
