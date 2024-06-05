import { BaseResources } from './BaseResources'
import { ElementsType } from '../parameters/BarracksParameters'

export interface BarracksBooksByElement {
  rank1: number
  rank2: number
  rank3: number
  rank4: number
}

export default class BarracksBooksResources implements BaseResources<BarracksBooksResources> {
  bow: BarracksBooksByElement
  fire: BarracksBooksByElement
  ice: BarracksBooksByElement
  poison: BarracksBooksByElement
  random: number

  constructor(initData?: Partial<BarracksBooksResources>) {
    this.bow = this.getFilledBooksByElement(initData?.bow)
    this.fire = this.getFilledBooksByElement(initData?.fire)
    this.ice = this.getFilledBooksByElement(initData?.ice)
    this.poison = this.getFilledBooksByElement(initData?.poison)
    this.random = initData?.random || 0
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
