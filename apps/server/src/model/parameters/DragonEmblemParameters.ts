import type { ParametersData } from 'kg-calculator-typings'

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

  static transformDataFromDB(items: { parameterId: string; value: string }[]): DragonEmblemParameters {
    const parameters = new DragonEmblemParameters()
    items.forEach((item) => {
      const [, param] = item.parameterId.split('_')
      parameters[param] = Number(item.value) || 0
    })

    return parameters
  }

  getDataForDB() {
    return [
      { parameterId: 'dragonEmblems_green', value: this.green || null },
      { parameterId: 'dragonEmblems_blue', value: this.blue || null },
      { parameterId: 'dragonEmblems_purple', value: this.purple || null },
      { parameterId: 'dragonEmblems_gold', value: this.gold || null },
    ]
  }
}
