import type ServerSettings from '../../ServerSettings'
import Parameters from '../../parameters/Parameters'
import Resources from '../../resources/Resources'
import type Settings from '../../settings/Settings'
import gemsInfo from './gemsInfo.json'
import witchInfo from './witchInfo.json'
import type { CalculateWitchResponse } from 'kg-calculator-typings'


export default class WitchCalculatorModel {
  private readonly _sourceResources: Resources
  private readonly _sourceParameters: Parameters
  private readonly _settings: Settings
  private readonly _serverSettings: ServerSettings
  private _parameters: Parameters
  private _leftResources: Resources
  private _spentResources: Resources

  constructor(resources: Resources, parameters: Parameters, settings: Settings, serverSettings: ServerSettings) {
    this._sourceResources = resources
    this._sourceParameters = parameters
    this._settings = settings
    this._serverSettings = serverSettings
    this._parameters = parameters.clone()
    this._leftResources = resources.clone()
    this._spentResources = new Resources()
  }

  calculateWitch(): CalculateWitchResponse {
    while (this.tryLevelUpWitch()) {}
    while (this.tryLevelUpGem()) {}

    this._spentToArtifact()

    const oldParams = this._sourceParameters.getData()
    const newParams = this._parameters.getData()

    return {
      newParameters: newParams.params,
      oldParameters: oldParams.params,
      newGemsParameters: newParams.gems,
      oldGemsParameters: oldParams.gems,
      sourceResources: this._sourceResources.getData(),
      leftResources: this._leftResources.getData(),
      spentResources: this._spentResources.getData(),
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
      const rankNumber = Number(rank)
      if (rankNumber > this._serverSettings.witchGemsMaxRank) continue
      const gems = this._parameters.witch.gems[rank]

      const rankInfo = gemsInfo[`rank${rank}`]

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

  private _spentToArtifact() {
    if (this._settings.spentToArtifactLightReagents && this._parameters.witch.lightLevel === 2000) {
      this._spentResources.witch.lightReagents += this._leftResources.witch.lightReagents
      this._leftResources.witch.lightReagents = 0
    }
  }
}
