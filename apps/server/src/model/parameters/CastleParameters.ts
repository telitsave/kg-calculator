import type { Parameters, ParametersData } from 'kg-calculator-typings'

export default class CastleParameters {
  level: number = 0

  constructor(initData?: ParametersData['castle']) {
    if (initData) {
      this.level = initData.level || 0
    }
  }

  static transformDataFromDB(items: Parameters): CastleParameters {
    const parameters = new CastleParameters()
    Object.entries(items).forEach(([key, value]) => {
      const [resourceType, param] = key.split('_')
      if (resourceType !== 'castleParams') return

      parameters[param] = value
    })

    return parameters
  }

  getData(): Parameters {
    return {
      castleParams_level: this.level,
    }
  }
}
