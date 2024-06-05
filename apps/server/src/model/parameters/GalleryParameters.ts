export default class GalleryParameters {
  level: number = 0
  step: number = 0

  constructor(initData?: Partial<GalleryParameters>) {
    this.level = initData?.level || 0
    this.step = initData?.step || 0
  }
}
