import { BaseResources } from './BaseResources'
import type { BarracksBooksByElement, ElementsType, Resources, ResourcesData } from 'kg-calculator-typings'


export default class BarracksBooksResources implements BaseResources<BarracksBooksResources> {
  bow: BarracksBooksByElement
  fire: BarracksBooksByElement
  ice: BarracksBooksByElement
  poison: BarracksBooksByElement
  random: number

  constructor(initData?: Partial<ResourcesData['barracksBooks']>) {
    this.bow = this.getFilledBooksByElement(initData?.bow)
    this.fire = this.getFilledBooksByElement(initData?.fire)
    this.ice = this.getFilledBooksByElement(initData?.ice)
    this.poison = this.getFilledBooksByElement(initData?.poison)
    this.random = initData?.random || 0
  }

  static transformDataFromDB(items: Resources): BarracksBooksResources {
    const resources = new BarracksBooksResources()
    Object.entries(items).forEach(([key, value]) => {
      const [resourceType, element, rank] = key.split('_')
      if (resourceType !== 'barracksResources') return

      if (element === 'random') {
        resources.random = value
      } else {
        resources[element][`rank${rank}`] = value
      }
    })

    return resources
  }

  clone(): BarracksBooksResources {
    return new BarracksBooksResources(this)
  }

  add(otherResources: BarracksBooksResources): void {
    this.addBooksByElement(this.bow, otherResources.bow)
    this.addBooksByElement(this.fire, otherResources.fire)
    this.addBooksByElement(this.ice, otherResources.ice)
    this.addBooksByElement(this.poison, otherResources.poison)
    this.random += otherResources.random
  }

  substract(otherResources: BarracksBooksResources): void {
    this.subtractBooksByElement(this.bow, otherResources.bow)
    this.subtractBooksByElement(this.fire, otherResources.fire)
    this.subtractBooksByElement(this.ice, otherResources.ice)
    this.subtractBooksByElement(this.poison, otherResources.poison)
    this.random -= otherResources.random
    if (this.random < 0) this.random = 0
  }

  getAllBooksByRank(rank: keyof BarracksBooksByElement) {
    return this.bow[rank] + this.fire[rank] + this.ice[rank] + this.poison[rank]
  }

  getData(): Resources {
    return {
      barracksResources_bow_1: this.bow.rank1,
      barracksResources_bow_2: this.bow.rank2,
      barracksResources_bow_3: this.bow.rank3,
      barracksResources_bow_4: this.bow.rank4,
      barracksResources_fire_1: this.fire.rank1,
      barracksResources_fire_2: this.fire.rank2,
      barracksResources_fire_3: this.fire.rank3,
      barracksResources_fire_4: this.fire.rank4,
      barracksResources_ice_1: this.ice.rank1,
      barracksResources_ice_2: this.ice.rank2,
      barracksResources_ice_3: this.ice.rank3,
      barracksResources_ice_4: this.ice.rank4,
      barracksResources_poison_1: this.poison.rank1,
      barracksResources_poison_2: this.poison.rank2,
      barracksResources_poison_3: this.poison.rank3,
      barracksResources_poison_4: this.poison.rank4,
      barracksResources_random: this.random,
    }
  }

  convertBooksToRankByElement(element: ElementsType, rank: number) {
    this.convertBooksToRank(this[element], rank)
  }

  spentRandomBooksToElement(element: ElementsType, rank: number) {
    const neededBooks = Math.pow(5, rank - 1)
    if (this.random >= neededBooks) {
      this.random -= neededBooks
      const rankKey = `rank${rank}`
      this[element][rankKey] += 1
      return neededBooks
    }
    return 0
  }

  private getFilledBooksByElement(elementBooks?: BarracksBooksByElement): BarracksBooksByElement {
    return {
      rank1: elementBooks?.rank1 || 0,
      rank2: elementBooks?.rank2 || 0,
      rank3: elementBooks?.rank3 || 0,
      rank4: elementBooks?.rank4 || 0,
    }
  }

  private addBooksByElement(sourceBooks: BarracksBooksByElement, elementBooks: BarracksBooksByElement) {
    sourceBooks.rank1 += elementBooks.rank1
    sourceBooks.rank2 += elementBooks.rank2
    sourceBooks.rank3 += elementBooks.rank3
    sourceBooks.rank4 += elementBooks.rank4
  }

  private subtractBooksByElement(sourceBooks: BarracksBooksByElement, elementBooks: BarracksBooksByElement) {
    sourceBooks.rank1 -= elementBooks.rank1
    if (sourceBooks.rank1 < 0) sourceBooks.rank1 = 0
    sourceBooks.rank2 -= elementBooks.rank2
    if (sourceBooks.rank2 < 0) sourceBooks.rank2 = 0
    sourceBooks.rank3 -= elementBooks.rank3
    if (sourceBooks.rank3 < 0) sourceBooks.rank3 = 0
    sourceBooks.rank4 -= elementBooks.rank4
    if (sourceBooks.rank4 < 0) sourceBooks.rank4 = 0
  }

  private convertBooksToRank(elementRanks: BarracksBooksByElement, rank: number) {
    for (let i = 2; i <= rank; i++) {
      const previousKey = `rank${i - 1}` as keyof BarracksBooksByElement
      const key = `rank${i}` as keyof BarracksBooksByElement
      const convertedBooks = Math.floor(elementRanks[previousKey] / 5)
      elementRanks[previousKey] -= convertedBooks * 5
      elementRanks[key] += convertedBooks
    }
  }
}
