export default class DragonEmblemParameters {
  green: number = 0
  blue: number = 0
  purple: number = 0
  gold: number = 0

  constructor(initData?: Partial<Pick<DragonEmblemParameters, 'green' | 'blue' | 'purple' | 'gold'>>) {
    if (initData) {
      this.green = initData.green || 0
      this.blue = initData.blue || 0
      this.purple = initData.purple || 0
      this.gold = initData.gold || 0
    }
  }
}
