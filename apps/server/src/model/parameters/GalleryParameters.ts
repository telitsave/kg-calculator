import type { Parameters, ParametersData } from 'kg-calculator-typings'

export default class GalleryParameters {
  level: number = 0
  step: number = 0

  constructor(initData?: ParametersData['gallery']) {
    this.level = initData?.level || 0
    this.step = initData?.step || 0
  }

  static transformDataFromDB(items: Parameters): GalleryParameters {
    const parameters = new GalleryParameters()
    Object.entries(items).forEach(([key, value]) => {
      const [resourceType, param] = key.split('_')
      if (resourceType !== 'galleryParams') return

      parameters[param] = value
    })

    return parameters
  }

  getData(): Parameters {
    return {
      galleryParams_level: this.level,
      galleryParams_step: this.step,
    }
  }
}
