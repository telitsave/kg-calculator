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

  static transformDataFromDB(items: { parameterId: string; value: string }[]): TalentsParameters {
    const parameters = new TalentsParameters()
    items.forEach((item) => {
      const [, element, rank, param] = item.parameterId.split('_')
      parameters[element].rank[rank][param] = Number(item.value) || 0
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

  getDataForDB() {
    return [
      ...Object.entries(this.bow.rank).flatMap(([rank, value]) => [
        {
          parameterId: `talents_bow_${rank}_booksCells`,
          value: value.booksCells || null,
        },
        {
          parameterId: `talents_bow_${rank}_crownsCells`,
          value: value.crownsCells || null,
        },
      ]),
      ...Object.entries(this.fire.rank).flatMap(([rank, value]) => [
        {
          parameterId: `talents_fire_${rank}_booksCells`,
          value: value.booksCells || null,
        },
        {
          parameterId: `talents_fire_${rank}_crownsCells`,
          value: value.crownsCells || null,
        },
      ]),
      ...Object.entries(this.ice.rank).flatMap(([rank, value]) => [
        {
          parameterId: `talents_ice_${rank}_booksCells`,
          value: value.booksCells || null,
        },
        {
          parameterId: `talents_ice_${rank}_crownsCells`,
          value: value.crownsCells || null,
        },
      ]),
      ...Object.entries(this.poison.rank).flatMap(([rank, value]) => [
        {
          parameterId: `talents_poison_${rank}_booksCells`,
          value: value.booksCells || null,
        },
        {
          parameterId: `talents_poison_${rank}_crownsCells`,
          value: value.crownsCells || null,
        },
      ]),
    ]
  }

  private getFilledTalentsByElementRank(rank?: TalentParametersByElementRank): TalentParametersByElementRank {
    return {
      booksCells: rank?.booksCells || 0,
      crownsCells: rank?.crownsCells || 0,
    }
  }
}
