import { BaseResources } from './BaseResources'
import type { Resources, ResourcesData } from 'kg-calculator-typings'


export default class WitchResources implements BaseResources<WitchResources> {
  lightReagents: number = 0
  greenWitchPotion: number = 0
  purpleWitchPotion: number = 0

  constructor(initData?: Partial<ResourcesData['witch']>) {
    if (initData) {
      this.lightReagents = initData.lightReagents || 0
      this.greenWitchPotion = initData.greenWitchPotion || 0
      this.purpleWitchPotion = initData.purpleWitchPotion || 0
    }
  }

  static transformDataFromDB(items: Resources): WitchResources {
    const resources = new WitchResources()
    Object.entries(items).forEach(([key, value]) => {
      const [resourceType, param] = key.split('_')
      if (resourceType !== 'witchResources') return

      resources[param] = value
    })

    return resources
  }

  add(otherResources: WitchResources): void {
    this.lightReagents += otherResources.lightReagents
    this.greenWitchPotion += otherResources.greenWitchPotion
    this.purpleWitchPotion += otherResources.purpleWitchPotion
  }

  clone(): WitchResources {
    return new WitchResources(this)
  }

  substract(otherResources: WitchResources): void {
    this.lightReagents -= otherResources.lightReagents
    if (this.lightReagents < 0) this.lightReagents = 0

    this.greenWitchPotion -= otherResources.greenWitchPotion
    if (this.greenWitchPotion < 0) this.greenWitchPotion = 0

    this.purpleWitchPotion -= otherResources.purpleWitchPotion
    if (this.purpleWitchPotion < 0) this.purpleWitchPotion = 0
  }

  getData(): Resources {
    return {
      witchResources_lightReagents: this.lightReagents,
      witchResources_purpleWitchPotion: this.purpleWitchPotion,
      witchResources_greenWitchPotion: this.greenWitchPotion,
    }
  }
}
