import type { WitchParameters } from 'kg-calculator-typings/api/Witch'

export type ParameterTypes =
  | 'castleLevel'
  | 'greenEmblem'
  | 'blueEmblem'
  | 'purpleEmblem'
  | 'goldEmblem'
  | 'dragonLevel'
  | 'lightPower'
  | 'darkPower'
  | 'barracksBowRank'
  | 'barracksBowLevel'
  | 'barracksFireRank'
  | 'barracksFireLevel'
  | 'barracksIceRank'
  | 'barracksIceLevel'
  | 'barracksPoisonRank'
  | 'barracksPoisonLevel'
  | 'talentBooks'
  | 'talentCrowns'
  | 'blacksmithLevel'
  | 'galleryStep'
  | 'galleryLevel'

export type Ranks = keyof WitchParameters['gems']
