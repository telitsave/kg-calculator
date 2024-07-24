import type { Ranks } from 'kg-calculator-typings'
import type { ElementsType } from 'kg-calculator-typings/api/Elements'
import StringHelper from 'shared/helpers/stringHelper'
import { ResourceType } from '../model/types'


export default class KeysHelper {
  static getBarracksBookResourceTypeByElementRank(element: ElementsType, rank: number) {
    return `book${StringHelper.capitalizeFirstLetter(element)}${rank}` as ResourceType
  }

  static getHeroCardsByRank(rank: Ranks): ResourceType {
    switch (rank) {
      case 'n':
        return 'heroGreenCards'
      case 'r':
        return 'heroBlueCards'
      case 'sr':
        return 'heroPurpleCards'
      case 'ssr':
        return 'heroGoldCards'
    }
  }
}
