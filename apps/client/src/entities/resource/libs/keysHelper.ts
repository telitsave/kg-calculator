import StringHelper from '../../../shared/helpers/stringHelper'
import { BarracksElements } from '../../parameter'
import { ResourceType } from '../model/types'

export default class KeysHelper {
  static getBarracksBookResourceTypeByElementRank(element: BarracksElements, rank: number) {
    return `book${StringHelper.capitalizeFirstLetter(element)}${rank}` as ResourceType
  }
}
