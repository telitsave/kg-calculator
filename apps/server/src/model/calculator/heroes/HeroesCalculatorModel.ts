import Resources from '../../resources/Resources'
import type { CalculateHeroesResponse } from 'kg-calculator-typings'

export default class HeroesCalculatorModel {
  private _spentResources: Resources = new Resources()

  constructor(resources: Resources) {
    this._spentResources = new Resources()
    this._spentResources.heroesCards.add(resources.heroesCards)
  }

  calculateHeroes(): CalculateHeroesResponse {
    return {
      spentResources: this._spentResources,
    }
  }
}
