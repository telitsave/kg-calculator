import type {
  ElementsType,
  ParametersData,
  TalentParametersByElement,
  TalentParametersByElementRank,
} from 'kg-calculator-typings'

export default class TalentsParameters {
  bow: TalentParametersByElement
  fire: TalentParametersByElement
  ice: TalentParametersByElement
  poison: TalentParametersByElement

  constructor(initData?: ParametersData['talents']) {
    this.bow = this.getFilledTalentsByElement(initData?.bow)
    this.fire = this.getFilledTalentsByElement(initData?.fire)
    this.ice = this.getFilledTalentsByElement(initData?.ice)
    this.poison = this.getFilledTalentsByElement(initData?.poison)
  }

  static transformDataFromDB(items: Record<string, number> = {}): TalentsParameters {
    const parameters = new TalentsParameters()
    Object.entries(items).forEach(([key, value]) => {
      const [element, rank, param] = key.split('_')

      parameters[element].rank[rank][param === 'small' ? 'booksCells' : 'crownsCells'] = value
    })

    return parameters
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

  getData(): Record<string, number> {
    const data: Record<string, number> = {}
    Object.entries(this.bow.rank).forEach(([rank, value]) => {
      data[`bow_${rank}_small`] = value.booksCells
      data[`bow_${rank}_big`] = value.crownsCells
    })
    Object.entries(this.fire.rank).forEach(([rank, value]) => {
      data[`fire_${rank}_small`] = value.booksCells
      data[`fire_${rank}_big`] = value.crownsCells
    })
    Object.entries(this.ice.rank).forEach(([rank, value]) => {
      data[`ice_${rank}_small`] = value.booksCells
      data[`ice_${rank}_big`] = value.crownsCells
    })
    Object.entries(this.poison.rank).forEach(([rank, value]) => {
      data[`poison_${rank}_small`] = value.booksCells
      data[`poison_${rank}_big`] = value.crownsCells
    })
    return data
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
