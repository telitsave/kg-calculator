export default class BarracksHelper {
  static getMaxLevels(rank: number = 1): number {
    if (rank < 1 || rank > 9) {
      return 0
    }

    return rank % 2 === 0 ? 200 : 100
  }

  static getPercentProgress(rank: number = 1, level: number = 0): number {
    if (rank < 1 || rank > 9) {
      return 0
    }

    if (level < 0) {
      return 0
    }
    if (level > this.getMaxLevels(rank)) {
      return 100
    }

    return rank % 2 === 0 ? level / 2 : level
  }
}
