import { BaseResources } from './BaseResources'
import type { ResourcesData } from 'kg-calculator-typings'


export default class TalentsResources implements BaseResources<TalentsResources> {
  books: number = 0
  oraclesCrowns: number = 0

  constructor(initData?: Partial<ResourcesData['talents']>) {
    this.books = initData?.books || 0
    this.oraclesCrowns = initData?.oraclesCrowns || 0
  }

  static transformDataFromDB(items: { itemId: string; count: number }[]): TalentsResources {
    const resources = new TalentsResources()
    items.forEach((item) => {
      const [, resource] = item.itemId.split('_')
      resources[resource] = item.count
    })

    return resources
  }

  add(otherResources: TalentsResources): void {
    this.books += otherResources.books
    this.oraclesCrowns += otherResources.oraclesCrowns
  }

  clone(): TalentsResources {
    return new TalentsResources(this)
  }

  substract(otherResources: TalentsResources): void {
    this.books -= otherResources.books
    if (this.books < 0) this.books = 0

    this.oraclesCrowns -= otherResources.oraclesCrowns
    if (this.oraclesCrowns < 0) this.oraclesCrowns = 0
  }

  getDataForDB() {
    return [
      { itemId: 'talentsResources_books', count: this.books },
      { itemId: 'talentsResources_oraclesCrowns', count: this.oraclesCrowns },
    ]
  }
}
