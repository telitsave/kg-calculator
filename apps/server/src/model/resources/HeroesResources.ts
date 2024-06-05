import { BaseResources } from './BaseResources'
import type { ResourcesData } from 'kg-calculator-typings'

export default class HeroesResources implements BaseResources<HeroesResources> {
  n: number = 0
  r: number = 0
  sr: number = 0
  ssr: number = 0

  constructor(initData?: Partial<ResourcesData['heroesCards']>) {
    this.n = initData?.n || 0
    this.r = initData?.r || 0
    this.sr = initData?.sr || 0
    this.ssr = initData?.ssr || 0
  }

  add(otherResources: HeroesResources): void {
    this.n += otherResources.n
    this.r += otherResources.r
    this.sr += otherResources.sr
    this.ssr += otherResources.ssr
  }

  clone(): HeroesResources {
    return new HeroesResources(this)
  }

  substract(otherResources: HeroesResources): void {
    this.n -= otherResources.n
    if (this.n < 0) this.n = 0

    this.r -= otherResources.r
    if (this.r < 0) this.r = 0

    this.sr -= otherResources.sr
    if (this.sr < 0) this.sr = 0

    this.ssr -= otherResources.ssr
    if (this.ssr < 0) this.ssr = 0
  }
}
