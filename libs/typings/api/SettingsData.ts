export interface SettingsData {
  canUseCastleBoxes: boolean
  canUseDragonBoxes: boolean
  canConvertCastleResources: boolean
  canUseRandomBarracksBooks: boolean
  canConvertBarracksBooksToTalents: boolean
  canUseTalentsToNonPriorityElements: boolean
  useAdvancedHeroMode: boolean

  priorityElement: 'bow' | 'fire' | 'ice' | 'poison'
}

export interface CustomServerSettingsData {
  talentsMaxRank?: number
  witchGemsMaxRank?: number
  talentBooksConversionRate?: {
    rank1?: number
    rank2?: number
    rank3?: number
    rank4?: number
  }
  extremePowerConversionRate?: {
    nHeroCard?: number
    rHeroCard?: number
    srHeroCard?: number
    ssrHeroCard?: number
    barrackBook1?: number
    barrackBook2?: number
    barrackBook3?: number
    barrackBook4?: number
    dragonRuneGreen?: number
    dragonRuneBlue?: number
    dragonRunePurple?: number
    dragonRuneGold?: number
    talentsBook?: number
    oracleCrown?: number
    stone?: number
    wood?: number
    steel?: number
    lightReagent?: number
    greenWitchPotion?: number
    purpleWitchPotion?: number
    blacksmith?: number
    galleryShard?: number
  }
  mightiestKingdomConversionRate?: {
    nHeroCard?: number
    rHeroCard?: number
    srHeroCard?: number
    ssrHeroCard?: number
    barrackBook1?: number
    barrackBook2?: number
    barrackBook3?: number
    barrackBook4?: number
    dragonRuneGreen?: number
    dragonRuneBlue?: number
    dragonRunePurple?: number
    dragonRuneGold?: number
    talentsBook?: number
    oracleCrown?: number
    lightReagent?: number
    greenWitchPotion?: number
    purpleWitchPotion?: number
    blacksmith?: number
    galleryShard?: number
  }
  season?: number
}
