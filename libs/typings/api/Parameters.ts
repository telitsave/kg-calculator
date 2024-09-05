export type Parameters = Partial<Record<ParameterTypes, number>>

export type ParameterTypes =
  | 'castleParams_level'
  | 'dragonParams_green'
  | 'dragonParams_blue'
  | 'dragonParams_purple'
  | 'dragonParams_gold'
  | 'dragonParams_level'
  | 'talentParams_books'
  | 'talentParams_crowns'
  | 'blacksmithParams_level'
  | 'galleryParams_step'
  | 'galleryParams_level'
  | 'barracksParams_bow_rank'
  | 'barracksParams_bow_level'
  | 'barracksParams_fire_rank'
  | 'barracksParams_fire_level'
  | 'barracksParams_ice_rank'
  | 'barracksParams_ice_level'
  | 'barracksParams_poison_rank'
  | 'barracksParams_poison_level'
  | 'witchParams_lightLevel'
  | 'witchParams_darkLevel'

export type GetAllParametersResponse = {
  params: Parameters
  gems: Record<string, number>
  talents: Record<string, number>
}

export interface SaveParametersPayload {
  parameters: Parameters
}

export interface SaveGemsPayload {
  gems: Record<string, number>
}

export interface SaveTalentsPayload {
  talents: Record<string, number>
}
