import { Settings } from 'shared/api'
import usePriorityElementSetting from './usePriorityElementSetting'
import useSetting from './useSetting'

const useSettings = (): Settings => {
  return {
    canUseCastleBoxes: useSetting('canUseCastleBoxes')[0],
    canConvertBarracksBooksToTalents: useSetting('canConvertBarracksBooksToTalents')[0],
    canConvertCastleResources: useSetting('canConvertCastleResources')[0],
    canUseDragonBoxes: useSetting('canUseDragonBoxes')[0],
    canUseRandomBarracksBooks: useSetting('canUseRandomBarracksBooks')[0],
    canUseTalentsToNonPriorityElements: useSetting('canUseTalentsToNonPriorityElements')[0],
    priorityElement: usePriorityElementSetting()[0],
  }
}

export default useSettings
