import Parameters from '../../parameters/Parameters'
import DragonRunesResources, { DragonRuneType } from '../../resources/DragonRunesResources'
import Resources from '../../resources/Resources'
import Settings from '../../settings/Settings'
import blueEmblemInfo from './jsonBlue.json'
import goldEmblemInfo from './jsonGold.json'
import greenEmblemInfo from './jsonGreen.json'
import purpleEmblemInfo from './jsonPurple.json'
import type { CalculatePossibleDragonResponse } from 'kg-calculator-typings'


export default class DragonEmblemsCalculatorModel {
  private readonly _sourceResources: Resources
  private readonly _sourceParameters: Parameters
  private readonly _settings: Settings
  private readonly _castleLevel: number
  private _parameters: Parameters
  private _leftResources: Resources
  private _spentResources: Resources
  private _spentBoxesResources: DragonRunesResources

  constructor(resources: Resources, parameters: Parameters, settings: Settings, castleLevel: number = 999999) {
    this._sourceResources = resources
    this._sourceParameters = parameters
    this._parameters = parameters.clone()
    this._settings = settings
    this._leftResources = resources.clone()
    this._spentResources = new Resources()
    this._spentBoxesResources = new DragonRunesResources()
    this._castleLevel = castleLevel
  }

  getPossibleDragon(): CalculatePossibleDragonResponse {
    this._spentResourcesWithoutBoxes()
    while (this.tryLevelUp()) {}

    if (this._settings.spentToArtifactDragon && this._parameters.dragonEmblems.gold >= 27) {
      this._spentResourcesToArtifact()
    }

    return {
      oldParameters: this._sourceParameters.getData().params,
      newParameters: this._parameters.getData().params,
      sourceResources: this._sourceResources.getData(),
      spentResources: this._spentResources.getData(),
      leftResources: this._leftResources.getData(),
      spentBoxesResources: this._spentBoxesResources.getData(),
      castleLimit: this._castleLevel !== 999999 ? this._castleLevel : undefined,
    }
  }

  private _spentResourcesWithoutBoxes() {
    while (this._upEmblem('green')) {}
    while (this._upEmblem('blue')) {}
    while (this._upEmblem('purple')) {}
    while (this._upEmblem('gold')) {}
  }

  private tryLevelUp(): boolean {
    return (['gold', 'purple', 'blue', 'green'] as DragonRuneType[]).some((runeType) => {
      if (!this._isAllowUpEmblem(runeType)) return false

      return this.tryLevelUpEmblem(runeType)
    })
  }

  private tryLevelUpEmblem(runeType: DragonRuneType): boolean {
    if (!this._isEnoughResources(runeType)) {
      if (!this._settings.canUseDragonBoxes) return false

      const emblemInfo = this._getEmblemInfo(runeType)

      const neededRunes = emblemInfo.runes - this._leftResources.dragonsRunes[runeType]
      const neededBoxes = DragonRunesResources.getNeededBoxes(neededRunes, runeType)

      if (this._leftResources.dragonsRunes.boxes < neededBoxes) return false

      this._leftResources.dragonsRunes.spentBoxes(neededBoxes, runeType)
      this._spentBoxesResources[runeType] += neededBoxes
      this._spentResources.dragonsRunes.boxes += neededBoxes
    }

    return this._upEmblem(runeType)
  }

  private _getEmblemInfo(runeType: DragonRuneType) {
    switch (runeType) {
      case 'green':
        return greenEmblemInfo[this._parameters.dragonEmblems.green]
      case 'blue':
        return blueEmblemInfo[this._parameters.dragonEmblems.blue]
      case 'purple':
        return purpleEmblemInfo[this._parameters.dragonEmblems.purple]
      case 'gold':
        return goldEmblemInfo[this._parameters.dragonEmblems.gold]
    }
  }

  private _isAllowUpEmblem(runeType: DragonRuneType) {
    if (this._settings.spentToArtifactDragon) {
      if (this._parameters.dragonEmblems.gold >= 27) {
        if (!this._settings.useCastleLimit) {
          return false
        }
      }
    }
    switch (runeType) {
      case 'green':
        return (
          this._parameters.dragonEmblems.green < 30000 &&
          (this._parameters.dragonEmblems.green < 3000 || this._parameters.dragonEmblems.green < this._castleLevel)
        )
      case 'blue':
        return this._parameters.dragonEmblems.blue < Math.floor(this._parameters.dragonEmblems.green / 5)
      case 'purple':
        return this._parameters.dragonEmblems.purple < Math.floor(this._parameters.dragonEmblems.blue / 4)
      case 'gold':
        return this._parameters.dragonEmblems.gold < Math.floor(this._parameters.dragonEmblems.purple / 5)
    }
  }

  private _isEnoughResources(runeType: DragonRuneType) {
    const emblemInfo = this._getEmblemInfo(runeType)
    return this._leftResources.dragonsRunes[runeType] >= emblemInfo.runes
  }

  private _upEmblem(runeType: DragonRuneType) {
    if (!this._isAllowUpEmblem(runeType)) return false
    if (!this._isEnoughResources(runeType)) return false

    const emblemInfo = this._getEmblemInfo(runeType)
    this._leftResources.dragonsRunes[runeType] -= emblemInfo.runes
    this._spentResources.dragonsRunes[runeType] += emblemInfo.runes
    this._parameters.dragonEmblems[runeType] += 1

    return true
  }

  private _spentResourcesToArtifact() {
    if (this._settings.canUseDragonBoxes) {
      this._spentBoxesResources.green += this._leftResources.dragonsRunes.boxes
      this._spentResources.dragonsRunes.boxes += this._leftResources.dragonsRunes.boxes
      this._leftResources.dragonsRunes.spentBoxes(this._leftResources.dragonsRunes.boxes, 'gold')
    }
    this._spentResources.dragonsRunes.green += this._leftResources.dragonsRunes.green
    this._spentResources.dragonsRunes.blue += this._leftResources.dragonsRunes.blue
    this._spentResources.dragonsRunes.purple += this._leftResources.dragonsRunes.purple
    this._spentResources.dragonsRunes.gold += this._leftResources.dragonsRunes.gold

    this._leftResources.dragonsRunes.green = 0
    this._leftResources.dragonsRunes.blue = 0
    this._leftResources.dragonsRunes.purple = 0
    this._leftResources.dragonsRunes.gold = 0
  }
}
