import type { Ranks } from 'kg-calculator-typings'
import HeroHelper from '../libs/HeroHelper'

export default class HeroData {
  id: string
  rank: Ranks
  stars = 0
  bars = 0

  constructor(id: string, rank: Ranks, stars = 0, bars = 0) {
    this.id = id
    this.rank = rank
    this.stars = stars
    this.bars = bars
  }

  addStar() {
    const maxStars = HeroHelper.getMaxStars(this.rank)

    if (this.stars >= maxStars) return

    this.stars += 1
    this.bars = 0
  }

  removeStar() {
    if (this.bars === 0 && this.stars > 0) {
      this.stars -= 1
    }

    this.bars = 0
  }

  addBar() {
    const maxStars = HeroHelper.getMaxStars(this.rank)
    const maxBars = HeroHelper.getMaxBars(this.rank, this.stars)

    if (this.stars === maxStars) return
    if (this.bars === maxBars - 1) {
      this.bars = 0
      this.stars += 1
    } else {
      this.bars += 1
    }
  }

  removeBar() {
    if (this.bars === 0 && this.stars === 0) return
    if (this.bars === 0) {
      this.bars = HeroHelper.getMaxBars(this.rank, this.stars - 1) - 1
      this.stars -= 1
    } else {
      this.bars -= 1
    }
  }
}
