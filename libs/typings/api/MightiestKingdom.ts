export type MightiestKingdomTypes = 'dragon' | 'witch' | 'barracks' | 'blacksmith' | 'gallery' | 'heroes'

export interface CalculateMightiestKingdomPayload {
  types: MightiestKingdomTypes[]
}

export interface CalculateMightiestKingdomResponse {
  dragonResources_green: number
  dragonResources_blue: number
  dragonResources_purple: number
  dragonResources_gold: number
  dragonResources_total: number
  witchResources_lightReagents: number
  witchResources_greenWitchPotion: number
  witchResources_purpleWitchPotion: number
  witchResources_total: number
  barracksResources_1: number
  barracksResources_2: number
  barracksResources_3: number
  barracksResources_4: number
  barracksResources_total: number
  talentsResources_books: number
  talentsResources_oraclesCrowns: number
  blacksmithResources_hammers: number
  blacksmithResources_total: number
  galleryResources_shards: number
  galleryResources_total: number
  heroesResources_n: number
  heroesResources_r: number
  heroesResources_sr: number
  heroesResources_ssr: number
  heroesResources_total: number
  total: number
}
