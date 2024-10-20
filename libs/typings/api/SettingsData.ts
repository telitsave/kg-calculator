export interface Settings {
  canUseCastleBoxes?: boolean
  canUseDragonBoxes?: boolean
  canConvertCastleResources?: boolean
  canUseRandomBarracksBooks?: boolean
  canConvertBarracksBooksToTalents?: boolean
  canUseTalentsToNonPriorityElements?: boolean
  useAdvancedHeroMode?: boolean
  useCastleLimit?: boolean
  usePossibleCastleLimit?: boolean
  priorityElement?: 'bow' | 'fire' | 'ice' | 'poison'
  spentToArtifactLightReagents?: boolean
  spentToArtifactHammers?: boolean
  spentToArtifactDragon?: boolean
  spentToArtifactBarracks?: boolean
  spentToArtifactCastle?: boolean
}

export interface CustomServerSettingsData {
  enabledCustomServerSettings?: number
  talentsMaxRank?: number
  witchGemsMaxRank?: number

  talentBooks_rank1?: number
  talentBooks_rank2?: number
  talentBooks_rank3?: number
  talentBooks_rank4?: number

  up_nHeroCard?: number
  up_rHeroCard?: number
  up_srHeroCard?: number
  up_ssrHeroCard?: number
  up_barrackBook1?: number
  up_barrackBook2?: number
  up_barrackBook3?: number
  up_barrackBook4?: number
  up_dragonRuneGreen?: number
  up_dragonRuneBlue?: number
  up_dragonRunePurple?: number
  up_dragonRuneGold?: number
  up_talentsBook?: number
  up_oracleCrown?: number
  up_stone?: number
  up_wood?: number
  up_steel?: number
  up_lightReagent?: number
  up_greenWitchPotion?: number
  up_purpleWitchPotion?: number
  up_blacksmith?: number
  up_galleryShard?: number

  mk_nHeroCard?: number
  mk_rHeroCard?: number
  mk_srHeroCard?: number
  mk_ssrHeroCard?: number
  mk_barrackBook1?: number
  mk_barrackBook2?: number
  mk_barrackBook3?: number
  mk_barrackBook4?: number
  mk_dragonRuneGreen?: number
  mk_dragonRuneBlue?: number
  mk_dragonRunePurple?: number
  mk_dragonRuneGold?: number
  mk_talentsBook?: number
  mk_oracleCrown?: number
  mk_lightReagent?: number
  mk_greenWitchPotion?: number
  mk_purpleWitchPotion?: number
  mk_blacksmith?: number
  mk_galleryShard?: number

  season?: number
}

export type SaveSettingsPayload = Settings
export type SaveServerSettingsPayload = CustomServerSettingsData
