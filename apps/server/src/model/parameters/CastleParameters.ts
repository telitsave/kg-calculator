import type { ParametersData } from 'kg-calculator-typings'

export default class CastleParameters {
  level: number = 0

  constructor(initData?: ParametersData['castle']) {
    if (initData) {
      this.level = initData.level || 0
    }
  }
}
