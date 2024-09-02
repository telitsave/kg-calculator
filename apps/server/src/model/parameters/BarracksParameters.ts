import type { ElementsType, ParametersData } from 'kg-calculator-typings'

export interface ParametersByElement {
  rank: number
  level: number
}

export default class BarracksParameters {
  bow: ParametersByElement
  fire: ParametersByElement
  ice: ParametersByElement
  poison: ParametersByElement

  constructor(initData?: ParametersData['barracks']) {
    this.bow = {
      rank: initData?.bowRank || 0,
      level: initData?.bowLevel || 0,
    }
    this.fire = {
      rank: initData?.fireRank || 0,
      level: initData?.fireLevel || 0,
    }
    this.ice = {
      rank: initData?.iceRank || 0,
      level: initData?.iceLevel || 0,
    }
    this.poison = {
      rank: initData?.poisonRank || 0,
      level: initData?.poisonLevel || 0,
    }
  }

  static transformDataFromDB(items: { parameterId: string; value: string }[]): BarracksParameters {
    const parameters = new BarracksParameters()
    items.forEach((item) => {
      const [, element, param] = item.parameterId.split('_')
      parameters[element][param] = Number(item.value) || 0
    })

    return parameters
  }

  getElementsWithMaxRank() {
    const elements: ElementsType[] = []
    if (this.bow.rank === 9) elements.push('bow')
    if (this.fire.rank === 9) elements.push('fire')
    if (this.ice.rank === 9) elements.push('ice')
    if (this.poison.rank === 9) elements.push('poison')

    return elements
  }

  getData(): ParametersData['barracks'] {
    return {
      bowRank: this.bow.rank,
      bowLevel: this.bow.level,
      fireRank: this.fire.rank,
      fireLevel: this.fire.level,
      iceRank: this.ice.rank,
      iceLevel: this.ice.level,
      poisonRank: this.poison.rank,
      poisonLevel: this.poison.level,
    }
  }

  clone() {
    return new BarracksParameters(this.getData())
  }

  getDataForDB() {
    return [
      { parameterId: 'barracks_bow_rank', value: this.bow.rank || null },
      { parameterId: 'barracks_bow_level', value: this.bow.level || null },
      { parameterId: 'barracks_fire_rank', value: this.fire.rank || null },
      { parameterId: 'barracks_fire_level', value: this.fire.level || null },
      { parameterId: 'barracks_ice_rank', value: this.ice.rank || null },
      { parameterId: 'barracks_ice_level', value: this.ice.level || null },
      { parameterId: 'barracks_poison_rank', value: this.poison.rank || null },
      { parameterId: 'barracks_poison_level', value: this.poison.level || null },
    ]
  }
}
