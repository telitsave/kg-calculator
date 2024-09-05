import type { Parameters, ParametersData } from 'kg-calculator-typings'

export default class DragonEmblemParameters {
  green: number = 0
  blue: number = 0
  purple: number = 0
  gold: number = 0

  constructor(initData?: ParametersData['dragonEmblems']) {
    if (initData) {
      this.green = initData.green || 0
      this.blue = initData.blue || 0
      this.purple = initData.purple || 0
      this.gold = initData.gold || 0
    }
  }

  static transformDataFromDB(items: Parameters): DragonEmblemParameters {
    const parameters = new DragonEmblemParameters()
    Object.entries(items).forEach(([key, value]) => {
      const [resourceType, param] = key.split('_')
      if (resourceType !== 'dragonParams') return

      parameters[param] = value
    })

    return parameters
  }

  getData(): Parameters {
    return {
      dragonParams_green: this.green,
      dragonParams_blue: this.blue,
      dragonParams_purple: this.purple,
      dragonParams_gold: this.gold,
    }
  }
}
