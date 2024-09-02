import type { ParametersData } from 'kg-calculator-typings'

export default class BlacksmithParameters {
  level: number = 0

  constructor(initData?: ParametersData['blacksmith']) {
    this.level = initData?.level || 0
  }

  static transformDataFromDB(items: { parameterId: string; value: string }[]): BlacksmithParameters {
    const parameters = new BlacksmithParameters()
    items.forEach((item) => {
      const [, param] = item.parameterId.split('_')
      parameters[param] = Number(item.value) || 0
    })

    return parameters
  }

  getDataForDB() {
    return [{ parameterId: 'blacksmith_level', value: this.level || null }]
  }
}
