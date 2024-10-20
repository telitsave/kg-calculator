import Parameters from '../../parameters/Parameters'
import Resources from '../../resources/Resources'
import type Settings from '../../settings/Settings'
import data from './data.json'
import { CalculateBlacksmithResponse } from 'kg-calculator-typings'


export default class BlacksmithCalculatorModel {
  private readonly _settings: Settings
  private readonly _sourceParameters: Parameters
  private readonly _sourceResources: Resources
  private _parameters: Parameters
  private _leftResources: Resources
  private _spentResources: Resources = new Resources()

  constructor(resources: Resources, parameters: Parameters, settings: Settings) {
    this._sourceParameters = parameters
    this._sourceResources = resources
    this._parameters = parameters.clone()
    this._leftResources = resources.clone()
    this._settings = settings
  }

  calculateBlacksmith(): CalculateBlacksmithResponse {
    while (this.tryCalculateBlacksmith()) {}
    this._spentToArtifact()

    return {
      sourceParameters: this._sourceParameters.getData().params,
      parameters: this._parameters.getData().params,
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

  private _spentToArtifact() {
    if (this._settings.spentToArtifactHammers && this._parameters.blacksmith.level === 2000) {
      this._spentResources.blacksmith.hammers += this._leftResources.blacksmith.hammers
      this._leftResources.blacksmith.hammers = 0
    }
  }
}
