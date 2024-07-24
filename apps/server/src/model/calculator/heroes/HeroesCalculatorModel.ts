import HeroModel from '../../heroes/HeroModel'
import HeroesResources from '../../resources/HeroesResources'
import Resources from '../../resources/Resources'
import type Settings from '../../settings/Settings'
import type {
  CalculateHeroesResponse,
  HeroExperienceSpent,
  HeroUpgrade,
  HeroesDistribution,
  IHeroData,
} from 'kg-calculator-typings'

export default class HeroesCalculatorModel {
  private _spentResources: Resources
  private _heroesUpgrades: HeroUpgrade[] = []
  private _spentDistributionCards: number = 0
  private _gettingStars: number = 0
  private _heroesExperienceSpent: HeroExperienceSpent[] = []
  private readonly _settings: Settings
  private readonly _heroesData: IHeroData[]
  private readonly _heroesDistribution: HeroesDistribution

  constructor(
    resources: Resources,
    settings: Settings,
    heroesData: IHeroData[],
    heroesDistribution: HeroesDistribution,
  ) {
    this._spentResources = new Resources()
    this._spentResources.heroesCards.add(resources.heroesCards)
    this._settings = settings
    this._heroesData = heroesData
    this._heroesDistribution = heroesDistribution
  }

  calculateHeroes(): CalculateHeroesResponse {
    if (this._settings.useAdvancedHeroMode) {
      this._advancedCalculateHeroes()
    }
    return {
      spentResources: this._spentResources,
      heroesUpgrades: this._heroesUpgrades,
      heroesExperienceSpent: this._heroesExperienceSpent,
      spentDistributionCards: this._spentDistributionCards,
      gettingStars: this._gettingStars,
    }
  }

  private _advancedCalculateHeroes() {
    this._spentResources.heroesCards = new HeroesResources()
    this._heroesData.forEach((hero) => this._calculateHero(hero, this._heroesDistribution[hero.id]))
  }

  private _calculateHero(heroData: IHeroData, distributionCards: number = 0) {
    const hero = new HeroModel(heroData.id, heroData)

    const heroUpgrade: HeroUpgrade = {
      hero: hero.heroData,
      spentDistributionCards: 0,
      spentCards: 0,
      newBars: heroData.bars,
      oldBars: heroData.bars,
      oldStars: heroData.stars,
      newStars: heroData.stars,
      maxBars: 0,
      maxStars: 0,
    }

    if (hero.heroData.rank === 'sr' || hero.heroData.rank === 'ssr') {
      let heroUpped = hero.upHero()
      while (heroUpped) {
        this._spentResources.heroesCards[hero.heroData.rank] += heroUpped
        heroUpgrade.maxBars = hero.getMaxBars()
        heroUpgrade.maxStars = hero.getMaxStars()
        heroUpgrade.newStars = hero.stars
        heroUpgrade.newBars = hero.bars
        heroUpgrade.spentCards += heroUpped
        heroUpped = hero.upHero()
      }

      hero.cards += distributionCards
      heroUpgrade.spentDistributionCards += distributionCards
      this._spentDistributionCards += distributionCards

      heroUpped = hero.upHero()
      while (heroUpped) {
        this._spentResources.heroesCards[hero.heroData.rank] += heroUpped
        heroUpgrade.maxBars = hero.getMaxBars()
        heroUpgrade.maxStars = hero.getMaxStars()
        heroUpgrade.newStars = hero.stars
        heroUpgrade.newBars = hero.bars
        heroUpgrade.spentCards += heroUpped
        heroUpped = hero.upHero()
      }

      if (heroUpgrade.oldStars < heroUpgrade.newStars) {
        heroUpgrade.oldBars = 0
      }

      if (heroUpgrade.spentCards > 0) {
        this._heroesUpgrades.push(heroUpgrade)
      }
    }
    if (hero.cards > 0) {
      if (hero.stars === hero.getMaxStars() || hero.heroData.rank === 'n' || hero.heroData.rank === 'r') {
        this._heroesExperienceSpent.push({
          hero: hero.heroData,
          spentCards: hero.cards,
        })
        this._spentResources.heroesCards[hero.heroData.rank] += hero.cards
      }
    }
    if (hero.heroData.rank === 'sr' || hero.heroData.rank === 'ssr') {
      const gettingStars = hero.stars - heroData.stars
      this._gettingStars += gettingStars
    }
  }
}
