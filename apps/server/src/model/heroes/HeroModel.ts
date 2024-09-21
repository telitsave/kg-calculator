import heroNeededCardsInfo from './heroNeededCardsInfo.json'
import type { Hero, IHeroData } from 'kg-calculator-typings'

export default class HeroModel {
  heroData: Hero
  stars: number
  bars: number
  cards: number

  constructor(hero: Hero, heroData: IHeroData) {
    this.heroData = hero as Hero
    this.stars = heroData.stars
    this.bars = heroData.bars
    this.cards = heroData.cards
  }

  upHero() {
    let barsArray = heroNeededCardsInfo[this.stars]

    if (!barsArray) return false

    const neededCardsForNextLevel = barsArray[this.bars]

    if (neededCardsForNextLevel > this.cards - 1) return false

    this.bars += 1
    this.cards -= neededCardsForNextLevel
    if (this.bars >= this.getMaxBars()) {
      this.stars += 1
      this.bars = 0
    }

    return neededCardsForNextLevel
  }

  getMaxStars() {
    switch (this.heroData.rank) {
      case 'n':
        return 2
      case 'r':
        return 3
      default:
        return 5
    }
  }

  getMaxBars() {
    const maxStars = this.getMaxStars()
    if (this.stars === maxStars) {
      return 0
    }
    switch (this.stars) {
      case 0:
        return 2
      case 1:
        return 3
      case 2:
        return 4
      default:
        return 5
    }
  }
}
