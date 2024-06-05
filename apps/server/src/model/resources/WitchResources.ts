import { BaseResources } from './BaseResources'

export default class WitchResources implements BaseResources<WitchResources> {
  lightReagents: number = 0
  greenWitchPotion: number = 0
  purpleWitchPotion: number = 0

  constructor(initData?: Partial<Pick<WitchResources, 'lightReagents' | 'purpleWitchPotion' | 'greenWitchPotion'>>) {
    if (initData) {
      this.lightReagents = initData.lightReagents || 0
      this.greenWitchPotion = initData.greenWitchPotion || 0
      this.purpleWitchPotion = initData.purpleWitchPotion || 0
    }
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
}
