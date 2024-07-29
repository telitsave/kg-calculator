import Parameters from '../../parameters/Parameters'
import Resources from '../../resources/Resources'
import data from './data.json'
import { CalculateBlacksmithResponse } from 'kg-calculator-typings'


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

  calculateBlacksmith(): CalculateBlacksmithResponse {
    while (this.tryCalculateBlacksmith()) {}

    return {
      sourceParameters: this._sourceParameters.getData(),
      parameters: this._parameters.getData(),
      sourceResources: this._sourceResources.getData(),
      spentResources: this._spentResources.getData(),
      leftResources: this._leftResources.getData(),
    }
  }

  private tryCalculateBlacksmith() {
    const nextLevelData = data[this._parameters.blacksmith.level]

    if (!nextLevelData) return false
    if (nextLevelData.cost > this._leftResources.blacksmith.hammers) return false

    this._leftResources.blacksmith.hammers -= nextLevelData.cost
    this._spentResources.blacksmith.hammers += nextLevelData.cost
    this._parameters.blacksmith.level += 1

    return true
  }
}
