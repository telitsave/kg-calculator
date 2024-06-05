import Resources from '../../resources/Resources'
import Parameters from '../../parameters/Parameters'
import data from './data.json'

export default class GalleryCalculatorModel {
  private readonly _sourceParameters: Parameters
  private readonly _sourceResources: Resources
  private _parameters: Parameters
  private _leftResources: Resources
  private _spentResources: Resources = new Resources()

  constructor(resources: Resources, parameters: Parameters) {
    this._sourceParameters = parameters
    this._sourceResources = resources
    this._parameters = parameters.clone()
    this._leftResources = resources.clone()
  }

  calculateGallery() {
    while (this.tryCalculateGallery()) {}

    return {
      sourceParameters: this._sourceParameters,
      parameters: this._parameters,
      sourceResources: this._sourceResources,
      spentResources: this._spentResources,
      leftResources: this._leftResources,
    }
  }

  private tryCalculateGallery() {
    const { step, level } = this._parameters.gallery

    const indexCurrentStepData = data.findIndex((it) => it.number === level && it.pieces === step)

    if (indexCurrentStepData === data.length) return false

    const nextStepData = data[indexCurrentStepData + 1]

    if (nextStepData.cost > this._leftResources.galleryShards) return false

    this._leftResources.galleryShards -= nextStepData.cost
    this._spentResources.galleryShards += nextStepData.cost
    this._parameters.gallery.level = nextStepData.number
    this._parameters.gallery.step = nextStepData.pieces

    return true
  }
}
