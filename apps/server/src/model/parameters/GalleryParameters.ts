import type { ParametersData } from 'kg-calculator-typings'

export default class GalleryParameters {
  level: number = 0
  step: number = 0

  constructor(initData?: ParametersData['gallery']) {
    this.level = initData?.level || 0
    this.step = initData?.step || 0
  }

  static transformDataFromDB(items: { parameterId: string; value: string }[]): GalleryParameters {
    const parameters = new GalleryParameters()
    items.forEach((item) => {
      const [, param] = item.parameterId.split('_')
      parameters[param] = Number(item.value) || 0
    })

    return parameters
  }

  getDataForDB() {
    return [
      { parameterId: 'gallery_level', value: this.level || null },
      { parameterId: 'gallery_step', value: this.step || null },
    ]
  }
}
