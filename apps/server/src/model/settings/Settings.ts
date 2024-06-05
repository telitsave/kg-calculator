import type { SettingsData } from 'kg-calculator-typings'

export default class Settings {
  canUseCastleBoxes: boolean
  canUseDragonBoxes: boolean
  canConvertCastleResources: boolean
  canUseRandomBarracksBooks: boolean
  canConvertBarracksBooksToTalents: boolean
  canUseTalentsToNonPriorityElements: boolean
  priorityElement: 'bow' | 'fire' | 'ice' | 'poison'

  constructor(initData?: SettingsData) {
    this.canUseCastleBoxes = initData?.canUseCastleBoxes || false
    this.canUseDragonBoxes = initData?.canUseDragonBoxes || false
    this.canConvertCastleResources = initData?.canConvertCastleResources || false
    this.canUseRandomBarracksBooks = initData?.canUseRandomBarracksBooks || false
    this.canConvertBarracksBooksToTalents = initData?.canConvertBarracksBooksToTalents || false
    this.canUseTalentsToNonPriorityElements = initData?.canUseTalentsToNonPriorityElements || false
    this.priorityElement = initData?.priorityElement || 'bow'
  }
}
