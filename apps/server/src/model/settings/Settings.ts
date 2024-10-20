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
  spentToArtifactLightReagents: boolean
  spentToArtifactHammers: boolean
  spentToArtifactDragon: boolean
  spentToArtifactBarracks: boolean
  spentToArtifactCastle: boolean
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
    this.spentToArtifactLightReagents = initData?.spentToArtifactLightReagents || false
    this.spentToArtifactHammers = initData?.spentToArtifactHammers || false
    this.spentToArtifactDragon = initData?.spentToArtifactDragon || false
    this.spentToArtifactBarracks = initData?.spentToArtifactBarracks || false
    this.spentToArtifactCastle = initData?.spentToArtifactCastle || false
    this.priorityElement = initData?.priorityElement || 'bow'
  }
}
