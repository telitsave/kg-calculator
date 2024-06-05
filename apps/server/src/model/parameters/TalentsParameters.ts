import { ElementsType } from './BarracksParameters'

export interface TalentParametersByElementRank {
  booksCells: number
  crownsCells: number
}

export interface TalentParametersByElement {
  rank: Record<number, TalentParametersByElementRank>
}

export default class TalentsParameters {
  bow: TalentParametersByElement
  fire: TalentParametersByElement
  ice: TalentParametersByElement
  poison: TalentParametersByElement

  constructor(initData?: Partial<TalentsParameters>) {
    this.bow = this.getFilledTalentsByElement(initData?.bow)
    this.fire = this.getFilledTalentsByElement(initData?.fire)
    this.ice = this.getFilledTalentsByElement(initData?.ice)
    this.poison = this.getFilledTalentsByElement(initData?.poison)
  }

  getFirstNotMaxRankBooks(element: ElementsType) {
    return Object.keys(this[element].rank)
      .map((rank) => Number(rank))
      .find((rank) => this[element].rank[rank].booksCells < 48)
  }

  getFirstNotMaxRankCrowns(element: ElementsType) {
    return Object.keys(this[element].rank)
      .map((rank) => Number(rank))
      .find((rank) => this[element].rank[rank].crownsCells < 6)
  }

  private getFilledTalentsByElement(element?: TalentParametersByElement): TalentParametersByElement {
    return {
      rank: {
        1: this.getFilledTalentsByElementRank(element?.rank[1]),
        2: this.getFilledTalentsByElementRank(element?.rank[2]),
        3: this.getFilledTalentsByElementRank(element?.rank[3]),
        4: this.getFilledTalentsByElementRank(element?.rank[4]),
        5: this.getFilledTalentsByElementRank(element?.rank[5]),
        6: this.getFilledTalentsByElementRank(element?.rank[6]),
        7: this.getFilledTalentsByElementRank(element?.rank[7]),
        8: this.getFilledTalentsByElementRank(element?.rank[8]),
        9: this.getFilledTalentsByElementRank(element?.rank[9]),
        10: this.getFilledTalentsByElementRank(element?.rank[10]),
      },
    }
  }

  private getFilledTalentsByElementRank(rank?: TalentParametersByElementRank): TalentParametersByElementRank {
    return {
      booksCells: rank?.booksCells || 0,
      crownsCells: rank?.crownsCells || 0,
    }
  }
}
