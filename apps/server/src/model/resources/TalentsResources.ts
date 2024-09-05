import { BaseResources } from './BaseResources'
import type { Resources, ResourcesData } from 'kg-calculator-typings'


export default class TalentsResources implements BaseResources<TalentsResources> {
  books: number = 0
  oraclesCrowns: number = 0

  constructor(initData?: Partial<ResourcesData['talents']>) {
    this.books = initData?.books || 0
    this.oraclesCrowns = initData?.oraclesCrowns || 0
  }

  static transformDataFromDB(items: Resources): TalentsResources {
    const resources = new TalentsResources()
    Object.entries(items).forEach(([key, value]) => {
      const [resourceType, param] = key.split('_')
      if (resourceType !== 'talentsResources') return

      resources[param] = value
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

  getData(): Resources {
    return {
      talentsResources_books: this.books,
      talentsResources_oraclesCrowns: this.oraclesCrowns,
    }
  }
}
