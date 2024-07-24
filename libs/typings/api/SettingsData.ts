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
