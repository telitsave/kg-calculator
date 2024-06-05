import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import StringHelper from 'shared/helpers/stringHelper'
import { ResourceType } from '../model/types'


export default class KeysHelper {
  static getBarracksBookResourceTypeByElementRank(element: ElementsType, rank: number) {
    return `book${StringHelper.capitalizeFirstLetter(element)}${rank}` as ResourceType
  }
}
