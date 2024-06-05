import { BaseResources } from './BaseResources'

export default class BlacksmithResources implements BaseResources<BlacksmithResources> {
  hammers: number = 0

  constructor(initData?: Partial<Pick<BlacksmithResources, 'hammers'>>) {
    this.hammers = initData?.hammers || 0
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
}
