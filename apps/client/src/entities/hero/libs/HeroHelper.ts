import type { Ranks } from 'kg-calculator-typings'
import heroNeededCardsInfo from '../model/heroNeededCardsInfo'

export default class HeroHelper {
  static getMaxStars(rank: Ranks) {
    switch (rank) {
      case 'n':
        return 2
      case 'r':
        return 3
      default:
        return 5
    }
  }

  static getMaxBars(rank: Ranks, stars: number) {
    const maxStars = this.getMaxStars(rank)
    if (stars === maxStars) {
      return 0
    }
    switch (stars) {
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

  static upStarsBars(oldStars: number, oldBars: number, cards: number, rank: Ranks) {
    const maxStars = this.getMaxStars(rank)
    let stars = oldStars
    let bars = oldBars
    let leftCards = cards
    let barsArray = heroNeededCardsInfo[stars]
    let neededCardsForNextLevel = 0
    let neededCardsForNextStar = 0
    let spentCardsForPrevLevel = 0
    let spentCardsForPrevStar = 0

    if (barsArray) {
      do {
        const neededCards = barsArray[bars]
        if (!neededCards) {
          stars += 1
          bars = 0
          barsArray = heroNeededCardsInfo[stars]
        } else {
          if (leftCards < neededCards + 1) {
            neededCardsForNextLevel = neededCards - leftCards + 1
            neededCardsForNextStar =
              barsArray.reduce((total, val, index) => (index >= bars ? total + val : total), 0) - leftCards + 1
            break
          }
          leftCards -= neededCards
          spentCardsForPrevLevel = neededCards
          if (bars === 0) {
            spentCardsForPrevStar = neededCards
          } else {
            spentCardsForPrevStar += neededCards
          }
          bars += 1
        }
      } while (stars < maxStars && !!barsArray)
    }

    return {
      oldStars,
      oldBars,
      rank,
      newStars: stars,
      newBars: bars,
      leftCards,
      spentCards: cards - leftCards,
      neededCardsForNextLevel,
      neededCardsForNextStar,
      spentCardsForPrevLevel,
      spentCardsForPrevStar,
    }
  }
}
