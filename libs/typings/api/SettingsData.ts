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
  useNewCalculatingTalents?: boolean
  priorityElement?: 'bow' | 'fire' | 'ice' | 'poison'
  spentToArtifactLightReagents?: boolean
  spentToArtifactHammers?: boolean
  spentToArtifactDragon?: boolean
  spentToArtifactBarracks?: boolean
  spentToArtifactCastle?: boolean
}

export interface CustomServerSettingsData {
  enabledCustomServerSettings?: number
  season?: number
  talentsMaxRank?: number
  witchGemsMaxRank?: number

  talentBooks_rank1?: number
  talentBooks_rank2?: number
  talentBooks_rank3?: number
  talentBooks_rank4?: number

  greenWitchPotionCount?: number
  greenWitchPotionCost?: number
  purpleWitchPotionCount?: number
  purpleWitchPotionCost?: number
  talentsBookCount?: number
  talentsBookCost?: number
  oracleCrownCount?: number
  oracleCrownCost?: number
}

export type SaveSettingsPayload = Settings
export type SaveServerSettingsPayload = CustomServerSettingsData
