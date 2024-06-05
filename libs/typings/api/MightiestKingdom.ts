import type {ResourcesData} from './ResourcesData'
import type {ParametersData} from './ParametersData'
import type {SettingsData} from './SettingsData'

export interface CalculateMightiestKingdomPayload {
  resources: ResourcesData
}

export interface CalculateMightiestKingdomResponse {
  dragonRunes: {
    green: number
    blue: number
    purple: number
    gold: number
    total: number
  }
  heroesCards: {
    n: number
    r: number
    sr: number
    ssr: number
    total: number
  }
  barracksBooks: {
    rank1: number
    rank2: number
    rank3: number
    rank4: number
    total: number
  }
  barracksTalents: {
    books: number
    oraclesCrowns: number
    total: number
  }
  witch: {
    lightReagents: number
    greenPotions: number
    purplePotions: number
    total: number
  }
  blacksmith: {
    hammers: number
    total: number
  }
  gallery: {
    shards: number
    total: number
  }
  total: number
}

export interface CalculateTotalMightiestKingdomPayload {
  resources: ResourcesData
  parameters: ParametersData
  settings: SettingsData
}
