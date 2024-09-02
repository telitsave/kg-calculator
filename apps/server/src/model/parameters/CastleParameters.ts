import type { ParametersData } from 'kg-calculator-typings'

export default class CastleParameters {
  level: number = 0

  constructor(initData?: ParametersData['castle']) {
    if (initData) {
      this.level = initData.level || 0
    }
  }

  static transformDataFromDB(items: { parameterId: string; value: string }[]): CastleParameters {
    const parameters = new CastleParameters()
    items.forEach((item) => {
      const [, param] = item.parameterId.split('_')
      parameters[param] = Number(item.value) || 0
    })

    return parameters
  }

  getDataForDB() {
    return [{ parameterId: 'castle_level', value: this.level || null }]
  }
}
