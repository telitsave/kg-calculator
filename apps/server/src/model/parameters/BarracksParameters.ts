import type { ElementsType, Parameters, ParametersData } from 'kg-calculator-typings'

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

  static transformDataFromDB(items: Parameters): BarracksParameters {
    const parameters = new BarracksParameters()
    Object.entries(items).forEach(([key, value]) => {
      const [resourceType, element, param] = key.split('_')
      if (resourceType !== 'barracksParams') return

      parameters[element][param] = value
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

  getData(): Parameters {
    return {
      barracksParams_bow_rank: this.bow.rank,
      barracksParams_bow_level: this.bow.level,
      barracksParams_fire_rank: this.fire.rank,
      barracksParams_fire_level: this.fire.level,
      barracksParams_ice_rank: this.ice.rank,
      barracksParams_ice_level: this.ice.level,
      barracksParams_poison_rank: this.poison.rank,
      barracksParams_poison_level: this.poison.level,
    }
  }

  clone() {
    return new BarracksParameters({
      bowRank: this.bow.rank,
      bowLevel: this.bow.level,
      fireRank: this.fire.rank,
      fireLevel: this.fire.level,
      iceRank: this.ice.rank,
      iceLevel: this.ice.level,
      poisonRank: this.poison.rank,
      poisonLevel: this.poison.level,
    })
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
