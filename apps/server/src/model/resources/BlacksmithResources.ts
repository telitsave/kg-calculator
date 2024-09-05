import { BaseResources } from './BaseResources'
import type { Resources, ResourcesData } from 'kg-calculator-typings'


export default class BlacksmithResources implements BaseResources<BlacksmithResources> {
  hammers: number = 0

  constructor(initData?: Partial<ResourcesData['blacksmith']>) {
    this.hammers = initData?.hammers || 0
  }

  static transformDataFromDB(items: Resources): BlacksmithResources {
    const resources = new BlacksmithResources()
    Object.entries(items).forEach(([key, value]) => {
      const [resourceType, param] = key.split('_')
      if (resourceType !== 'blacksmithResources') return

      resources[param] = value
    })

    return resources
  }

  add(otherResources: BlacksmithResources): void {
    this.hammers += otherResources.hammers
  }

  clone(): BlacksmithResources {
    return new BlacksmithResources(this)
  }

  substract(otherResources: BlacksmithResources): void {
    this.hammers += otherResources.hammers
    if (this.hammers < 0) this.hammers = 0
  }

  getData(): Resources {
    return {
      blacksmithResources_hammers: this.hammers,
    }
  }
}
