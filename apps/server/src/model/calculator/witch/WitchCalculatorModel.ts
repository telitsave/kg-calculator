import Resources from '../../resources/Resources'
import Parameters from '../../parameters/Parameters'
import witchInfo from './witchInfo.json'
import gemsInfo from './gemsInfo.json'
import type { CalculateWitchResponse } from 'kg-calculator-typings'

export default class WitchCalculatorModel {
  private readonly _sourceResources: Resources
  private readonly _sourceParameters: Parameters
  private _parameters: Parameters
  private _leftResources: Resources
  private _spentResources: Resources

  constructor(resources: Resources, parameters: Parameters) {
    this._sourceResources = resources
    this._sourceParameters = parameters
    this._parameters = parameters.clone()
    this._leftResources = resources.clone()
    this._spentResources = new Resources()
  }

  calculateWitch(): CalculateWitchResponse {
    while (this.tryLevelUpWitch()) {}
    while (this.tryLevelUpGem()) {}

    return {
      newParameters: this._parameters.getData(),
      oldParameters: this._sourceParameters.getData(),
      sourceResources: this._sourceResources,
      leftResources: this._leftResources,
      spentResources: this._spentResources,
    }
  }

  private tryLevelUpWitch(): boolean {
    const nextLevelInfo = witchInfo[this._parameters.witch.lightLevel]

    if (nextLevelInfo && this._leftResources.witch.lightReagents >= nextLevelInfo.lightCosts) {
      this._leftResources.witch.lightReagents -= nextLevelInfo.lightCosts
      this._spentResources.witch.lightReagents += nextLevelInfo.lightCosts
      this._parameters.witch.lightLevel += 1

      return true
    }

    return false
  }

  private tryLevelUpGem(): boolean {
    for (const rank of Object.keys(this._parameters.witch.gems)) {
      const gems = this._parameters.witch.gems[rank]

      const rankInfo = gemsInfo[rank]

      for (const gem of Object.keys(gems)) {
        const level: number = gems[gem]

        if (level === 0 || level === 20) continue

        const gemInfo = rankInfo[level]
        const enoughStrengthPotions = this._leftResources.witch.greenWitchPotion >= gemInfo.strengthPotions
        const enoughLuckPotions = this._leftResources.witch.purpleWitchPotion >= gemInfo.luckPotions

        if (enoughStrengthPotions && enoughLuckPotions) {
          this._leftResources.witch.greenWitchPotion -= gemInfo.strengthPotions
          this._leftResources.witch.purpleWitchPotion -= gemInfo.luckPotions
          this._spentResources.witch.greenWitchPotion += gemInfo.strengthPotions
          this._spentResources.witch.purpleWitchPotion += gemInfo.luckPotions
          this._parameters.witch.gems[rank][gem] += 1

          return true
        }
      }
    }

    return false
  }
}
