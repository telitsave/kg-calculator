import type { ElementsType, Ranks, ResourceType } from 'kg-calculator-typings'

export default class KeysHelper {
  static getBaracksKey(element: ElementsType, rank: number) {
    return `barracksResources_${element.toLowerCase()}_${rank}` as ResourceType
  }

  static getHeroCardsByRank(rank: Ranks): ResourceType {
    return `heroesResources_${rank}`
  }
}
