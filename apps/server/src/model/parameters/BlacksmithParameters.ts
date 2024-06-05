export default class BlacksmithParameters {
  level: number = 0

  constructor(initData?: Partial<BlacksmithParameters>) {
    this.level = initData?.level || 0
  }
}
