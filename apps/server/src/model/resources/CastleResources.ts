import { BaseResources } from './BaseResources'
import type { ResourcesData } from 'kg-calculator-typings'

export default class CastleResources implements BaseResources<CastleResources> {
  stone: number = 0
  wood: number = 0
  steel: number = 0
  boxes: number = 0

  constructor(initData?: Partial<ResourcesData['castle']>) {
    this.stone = initData?.stone || 0
    this.wood = initData?.wood || 0
    this.steel = initData?.steel || 0
    this.boxes = initData?.boxes || 0
  }

  spent(resources: CastleResources, canUseBoxes: boolean, canConvert: boolean) {
    let spent = new CastleResources()
    let convertedSource = new CastleResources()
    let convertedTarget = new CastleResources()
    let spentBoxesResources = new CastleResources()
    let isSuccess = true

    if (this.isEnought(resources)) {
      spent = resources.clone()
      this.substract(resources)
    } else {
      if (canConvert) {
        if (this.steel < resources.steel) {
          isSuccess = false
          const result = this.convertToSteel(resources.steel - this.steel)
          if (result.isSuccess) {
            convertedSource.stone += result.convertedSource.stone
            convertedSource.wood += result.convertedSource.wood
            convertedTarget.wood += result.convertedTarget.wood
            convertedTarget.steel += result.convertedTarget.steel
            isSuccess = true
          }
        }
        if (isSuccess && this.wood < resources.wood) {
          isSuccess = false
          const result = this.convertToWood(resources.wood - this.wood)
          if (result.isSuccess) {
            convertedSource.stone += result.convertedSource.stone
            convertedTarget.wood += result.convertedTarget.wood
            isSuccess = true
          }
        }
        if (isSuccess) {
          spent = resources.clone()
          this.substract(resources)
        }
      } else {
        isSuccess = false
      }
      if (canUseBoxes && !isSuccess) {
        if (this.isEnoughtBoxes(resources)) {
          spentBoxesResources.stone = Math.max(Math.ceil((resources.stone - this.stone) / 20), 0)
          spentBoxesResources.wood = Math.max(Math.ceil((resources.wood - this.wood) / 4), 0)
          spentBoxesResources.steel = Math.max(resources.steel - this.steel, 0)
          this.spentBoxes(spentBoxesResources.stone, 'stone')
          this.spentBoxes(spentBoxesResources.wood, 'wood')
          this.spentBoxes(spentBoxesResources.steel, 'steel')
          spent = resources.clone()
          this.substract(resources)
          spent.boxes += spentBoxesResources.steel
          spent.boxes += spentBoxesResources.wood
          spent.boxes += spentBoxesResources.stone
          isSuccess = true
        }
      }
    }

    return {
      spent,
      convertedSource,
      convertedTarget,
      spentBoxesResources,
      isSuccess,
    }
  }

  convertToSteel(count: number) {
    let convertedSource = new CastleResources()
    let convertedTarget = new CastleResources()
    let isSuccess = true

    if (count > 0) {
      if (this.wood >= count * 4) {
        this.wood -= count * 4
        this.steel += count
        convertedSource.wood = count * 4
        convertedTarget.steel = count
      } else {
        const result = this.convertToWood(count * 4 - this.wood)
        if (result.isSuccess) {
          this.wood -= count * 4
          this.steel += count
          convertedSource.stone = result.convertedSource.stone
          convertedSource.wood = count * 4
          convertedTarget.wood = result.convertedTarget.wood
          convertedTarget.steel = count
        } else {
          isSuccess = false
        }
      }
    }

    return {
      convertedSource,
      convertedTarget,
      isSuccess,
    }
  }

  convertToWood(count: number) {
    let convertedSource = new CastleResources()
    let convertedTarget = new CastleResources()
    let isSuccess = true

    if (count > 0) {
      if (this.stone >= count * 5) {
        this.stone -= count * 5
        this.wood += count
        convertedSource.stone = count * 5
        convertedTarget.wood = count
      } else {
        isSuccess = false
      }
    }

    return {
      convertedSource,
      convertedTarget,
      isSuccess,
    }
  }

  isEnoughtBoxes(resources: CastleResources) {
    let neededBoxes = 0
    if (resources.steel > this.steel) {
      neededBoxes += resources.steel - this.steel
    }
    if (resources.wood > this.wood) {
      neededBoxes += Math.ceil((resources.wood - this.wood) / 4)
    }
    if (resources.stone > this.stone) {
      neededBoxes += Math.ceil((resources.stone - this.stone) / 20)
    }

    return this.boxes >= neededBoxes
  }

  spentBoxes(count: number, to: 'stone' | 'wood' | 'steel') {
    if (this.boxes < count) return

    this.boxes -= count

    switch (to) {
      case 'stone':
        this.stone += count * 20
        break
      case 'wood':
        this.wood += count * 4
        break
      case 'steel':
        this.steel += count
    }
  }

  isEnought(resources: CastleResources) {
    return this.wood >= resources.wood && this.steel >= resources.steel && this.stone >= resources.stone
  }

  substract(otherResources: CastleResources) {
    this.stone -= otherResources.stone
    if (this.stone < 0) this.stone = 0

    this.wood -= otherResources.wood
    if (this.wood < 0) this.wood = 0

    this.steel -= otherResources.steel
    if (this.steel < 0) this.steel = 0

    this.boxes -= otherResources.boxes
    if (this.boxes < 0) this.boxes = 0
  }

  add(otherResources: CastleResources): void {
    this.stone += otherResources.stone
    this.wood += otherResources.wood
    this.steel += otherResources.steel
    this.boxes += otherResources.boxes
  }

  clone() {
    return new CastleResources(this)
  }
}
