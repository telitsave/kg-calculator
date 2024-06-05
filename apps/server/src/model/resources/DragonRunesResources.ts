import { BaseResources } from './BaseResources'

export type DragonRuneType = 'green' | 'blue' | 'purple' | 'gold'

export default class DragonRunesResources implements BaseResources<DragonRunesResources> {
  green: number = 0
  blue: number = 0
  purple: number = 0
  gold: number = 0
  boxes: number = 0

  constructor(initData?: Partial<Pick<DragonRunesResources, 'green' | 'boxes' | 'blue' | 'gold' | 'purple'>>) {
    this.green = initData?.green || 0
    this.blue = initData?.blue || 0
    this.purple = initData?.purple || 0
    this.gold = initData?.gold || 0
    this.boxes = initData?.boxes || 0
  }

  static getNeededBoxes(runesCount: number, runeType: DragonRuneType) {
    switch (runeType) {
      case 'green':
        return Math.ceil(runesCount / 200)
      case 'blue':
        return Math.ceil(runesCount / 20)
      case 'purple':
        return Math.ceil(runesCount / 2)
      case 'gold':
        return runesCount
    }
  }

  spentBoxes(count: number, runeType: DragonRuneType) {
    switch (runeType) {
      case 'green':
        this.green += count * 200
        break
      case 'blue':
        this.blue += count * 20
        break
      case 'purple':
        this.purple += count * 2
        break
      case 'gold':
        this.gold += count
        break
    }
    this.boxes -= count
  }

  add(otherResources: DragonRunesResources): void {
    this.green += otherResources.green
    this.blue += otherResources.blue
    this.purple += otherResources.purple
    this.gold += otherResources.gold
    this.boxes += otherResources.boxes
  }

  clone(): DragonRunesResources {
    return new DragonRunesResources(this)
  }

  substract(otherResources: DragonRunesResources): void {
    this.green -= otherResources.green
    if (this.green < 0) this.green = 0

    this.blue -= otherResources.blue
    if (this.blue < 0) this.blue = 0

    this.purple -= otherResources.purple
    if (this.purple < 0) this.purple = 0

    this.gold -= otherResources.gold
    if (this.gold < 0) this.gold = 0

    this.boxes -= otherResources.boxes
    if (this.boxes < 0) this.boxes = 0
  }
}
