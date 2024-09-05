import type { Parameters, ParametersData } from 'kg-calculator-typings'

export default class BlacksmithParameters {
  level: number = 0

  constructor(initData?: ParametersData['blacksmith']) {
    this.level = initData?.level || 0
  }

  static transformDataFromDB(items: Parameters): BlacksmithParameters {
    const parameters = new BlacksmithParameters()
    Object.entries(items).forEach(([key, value]) => {
      const [resourceType, param] = key.split('_')
      if (resourceType !== 'blacksmithParams') return

      parameters[param] = value
    })

    return parameters
  }

  getData(): Parameters {
    return {
      blacksmithParams_level: this.level,
    }
  }
}
