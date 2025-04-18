export type Resources = Partial<Record<ResourceType, number>>

export type GetInventoryResponse = Resources

export interface SaveInventoryPayload {
  resources: Resources
}

export type ResourceType =
  | 'barracksResources_bow_1'
  | 'barracksResources_bow_2'
  | 'barracksResources_bow_3'
  | 'barracksResources_bow_4'
  | 'barracksResources_fire_1'
  | 'barracksResources_fire_2'
  | 'barracksResources_fire_3'
  | 'barracksResources_fire_4'
  | 'barracksResources_ice_1'
  | 'barracksResources_ice_2'
  | 'barracksResources_ice_3'
  | 'barracksResources_ice_4'
  | 'barracksResources_poison_1'
  | 'barracksResources_poison_2'
  | 'barracksResources_poison_3'
  | 'barracksResources_poison_4'
  | 'barracksResources_random'
  | 'blacksmithResources_hammers'
  | 'castleResources_boxes'
  | 'castleResources_steel'
  | 'castleResources_stone'
  | 'castleResources_wood'
  | 'dragonResources_blue'
  | 'dragonResources_boxes'
  | 'dragonResources_gold'
  | 'dragonResources_green'
  | 'dragonResources_purple'
  | 'galleryResources_shards'
  | 'gold'
  | 'heroesResources_n'
  | 'heroesResources_r'
  | 'heroesResources_sr'
  | 'heroesResources_ssr'
  | 'talentsResources_books'
  | 'talentsResources_oraclesCrowns'
  | 'witchResources_greenWitchPotion'
  | 'witchResources_lightReagents'
  | 'witchResources_purpleWitchPotion'
  | 'beastsResources_advancedSummoningSpell'
  | 'blacksmithResources_bloodTitan'
  | 'dragonResources_deluxeSoulStone'
  | 'dragonResources_soulStone'
  | 'blacksmithResources_elementalVial'
  | 'beastsResources_perfectSummoningSpell'
