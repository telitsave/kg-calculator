import type { ParametersData } from 'kg-calculator-typings'

export default class GalleryParameters {
  level: number = 0
  step: number = 0

  constructor(initData?: ParametersData['gallery']) {
    this.level = initData?.level || 0
    this.step = initData?.step || 0
  }
}
