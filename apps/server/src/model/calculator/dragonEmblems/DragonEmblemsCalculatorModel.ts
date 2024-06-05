import Resources from '../../resources/Resources'
import Parameters from '../../parameters/Parameters'
import DragonRunesResources, { DragonRuneType } from '../../resources/DragonRunesResources'
import greenEmblemInfo from './jsonGreen.json'
import blueEmblemInfo from './jsonBlue.json'
import purpleEmblemInfo from './jsonPurple.json'
import goldEmblemInfo from './jsonGold.json'
import Settings from '../../settings/Settings'

export default class DragonEmblemsCalculatorModel {
  private readonly _sourceResources: Resources
  private readonly _sourceParameters: Parameters
  private readonly _settings: Settings
  private _parameters: Parameters
  private _leftResources: Resources
  private _spentResources: Resources
  private _spentBoxesResources: DragonRunesResources

  constructor(resources: Resources, parameters: Parameters, settings: Settings) {
    this._sourceResources = resources
    this._sourceParameters = parameters
    this._parameters = parameters.clone()
    this._settings = settings
    this._leftResources = resources.clone()
    this._spentResources = new Resources()
    this._spentBoxesResources = new DragonRunesResources()
  }

  getPossibleDragon() {
    while (this.tryLevelUp()) {}

    return {
      oldParameters: this._sourceParameters,
      newParameters: this._parameters,
      sourceResources: this._sourceResources,
      spentResources: this._spentResources,
      leftResources: this._leftResources,
      spentBoxesResources: this._spentBoxesResources,
    }
  }

  private tryLevelUp(): boolean {
    const shouldUpGoldEmblem =
      this._parameters.dragonEmblems.green % 100 === 0 &&
      this._parameters.dragonEmblems.gold < this._parameters.dragonEmblems.green / 100
    const shouldUpPurpleEmblem =
      this._parameters.dragonEmblems.green % 20 === 0 &&
      this._parameters.dragonEmblems.purple < this._parameters.dragonEmblems.green / 20
    const shouldUpBlueEmblem =
      this._parameters.dragonEmblems.green % 5 === 0 &&
      this._parameters.dragonEmblems.blue < this._parameters.dragonEmblems.green / 5

    if (shouldUpBlueEmblem) {
      return this.tryLevelUpEmblem('blue', blueEmblemInfo[this._parameters.dragonEmblems.blue])
    } else if (shouldUpPurpleEmblem) {
      return this.tryLevelUpEmblem('purple', purpleEmblemInfo[this._parameters.dragonEmblems.purple])
    } else if (shouldUpGoldEmblem) {
      return this.tryLevelUpEmblem('gold', goldEmblemInfo[this._parameters.dragonEmblems.gold])
    }

    if (this._parameters.dragonEmblems.green === 30000) {
      return false
    }

    return this.tryLevelUpEmblem('green', greenEmblemInfo[this._parameters.dragonEmblems.green])
  }

  private tryLevelUpEmblem(runeType: DragonRuneType, emblemInfo: (typeof greenEmblemInfo)[0]): boolean {
    if (this._leftResources.dragonsRunes[runeType] < emblemInfo.runes) {
      if (!this._settings.canUseDragonBoxes) return false

      const neededRunes = emblemInfo.runes - this._leftResources.dragonsRunes[runeType]
      const neededBoxes = DragonRunesResources.getNeededBoxes(neededRunes, runeType)

      if (this._leftResources.dragonsRunes.boxes < neededBoxes) return false

      this._leftResources.dragonsRunes.spentBoxes(neededBoxes, runeType)
      this._spentBoxesResources[runeType] += neededBoxes
      this._spentResources.dragonsRunes.boxes += neededBoxes
    }

    this._leftResources.dragonsRunes[runeType] -= emblemInfo.runes
    this._spentResources.dragonsRunes[runeType] += emblemInfo.runes
    this._parameters.dragonEmblems[runeType] += 1

    return true
  }
}
