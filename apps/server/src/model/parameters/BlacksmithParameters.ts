import type { ParametersData } from 'kg-calculator-typings'

export default class BlacksmithParameters {
  level: number = 0

  constructor(initData?: ParametersData['blacksmith']) {
    this.level = initData?.level || 0
  }
}
