import Resources from '../../resources/Resources'
import Parameters from '../../parameters/Parameters'
import data from './data.json'

export default class BlacksmithCalculatorModel {
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

  calculateBlacksmith() {
    while (this.tryCalculateBlacksmith()) {}

    return {
      sourceParameters: this._sourceParameters,
      parameters: this._parameters,
      sourceResources: this._sourceResources,
      spentResources: this._spentResources,
      leftResources: this._leftResources,
    }
  }

  private tryCalculateBlacksmith() {
    const nextLevelData = data[this._parameters.blacksmith.level]

    if (nextLevelData.cost > this._leftResources.blacksmith.hammers) return false

    this._leftResources.blacksmith.hammers -= nextLevelData.cost
    this._spentResources.blacksmith.hammers += nextLevelData.cost
    this._parameters.blacksmith.level += 1

    return true
  }
}
