import type { Settings as SettingsData } from 'kg-calculator-typings'

export default class Settings {
  canUseCastleBoxes: boolean
  canUseDragonBoxes: boolean
  canConvertCastleResources: boolean
  canUseRandomBarracksBooks: boolean
  canConvertBarracksBooksToTalents: boolean
  canUseTalentsToNonPriorityElements: boolean
  useAdvancedHeroMode: boolean
  useCastleLimit: boolean
  usePossibleCastleLimit: boolean
  priorityElement: 'bow' | 'fire' | 'ice' | 'poison'

  constructor(initData?: SettingsData) {
    this.canUseCastleBoxes = initData?.canUseCastleBoxes || false
    this.canUseDragonBoxes = initData?.canUseDragonBoxes || false
    this.canConvertCastleResources = initData?.canConvertCastleResources || false
    this.canUseRandomBarracksBooks = initData?.canUseRandomBarracksBooks || false
    this.canConvertBarracksBooksToTalents = initData?.canConvertBarracksBooksToTalents || false
    this.canUseTalentsToNonPriorityElements = initData?.canUseTalentsToNonPriorityElements || false
    this.useAdvancedHeroMode = initData?.useAdvancedHeroMode || false
    this.useCastleLimit = initData?.useCastleLimit || false
    this.usePossibleCastleLimit = initData?.usePossibleCastleLimit || false
    this.priorityElement = initData?.priorityElement || 'bow'
  }
}
