export type ElementsType = 'bow' | 'fire' | 'ice' | 'poison'

export interface BarracksParametersData {
  bowRank?: number
  bowLevel?: number
  fireRank?: number
  fireLevel?: number
  iceRank?: number
  iceLevel?: number
  poisonRank?: number
  poisonLevel?: number
}

export interface ParametersByElement {
  rank: number
  level: number
}

export default class BarracksParameters {
  bow: ParametersByElement
  fire: ParametersByElement
  ice: ParametersByElement
  poison: ParametersByElement

  constructor(initData?: Partial<BarracksParametersData>) {
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

  getElementsWithMaxRank() {
    const elements: ElementsType[] = []
    if (this.bow.rank === 9) elements.push('bow')
    if (this.fire.rank === 9) elements.push('fire')
    if (this.ice.rank === 9) elements.push('ice')
    if (this.poison.rank === 9) elements.push('poison')

    return elements
  }

  toJSON() {
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
    return new BarracksParameters(this.toJSON())
  }
}
