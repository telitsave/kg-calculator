export default class CastleParameters {
  level: number = 0

  constructor(initData?: Partial<Pick<CastleParameters, 'level'>>) {
    if (initData) {
      this.level = initData.level || 0
    }
  }
}
