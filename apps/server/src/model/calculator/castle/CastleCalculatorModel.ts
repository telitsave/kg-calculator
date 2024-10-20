import Parameters from '../../parameters/Parameters'
import CastleResources from '../../resources/CastleResources'
import Resources from '../../resources/Resources'
import Settings from '../../settings/Settings'
import castleInfo from './castleInfo.json'
import type { CalculateGoalCastleResponse, CalculatePossibleCastleResponse } from 'kg-calculator-typings'


const MAX_CASTLE_LEVEL = castleInfo.length - 1

export default class CastleCalculatorModel {
  private readonly _sourceResources: Resources
  private readonly _sourceParameters: Parameters
  private _parameters: Parameters
  private _settings: Settings
  private _leftResources: Resources
  private _spentResources: Resources
  private _convertedSource: CastleResources
  private _convertedTarget: CastleResources
  private _spentBoxesResources: CastleResources

  constructor(resources: Resources, parameters: Parameters, settings: Settings) {
    this._sourceResources = resources
    this._sourceParameters = parameters
    this._parameters = parameters.clone()
    this._settings = settings
    this._leftResources = resources.clone()
    this._spentResources = new Resources()
    this._convertedTarget = new CastleResources()
    this._convertedSource = new CastleResources()
    this._spentBoxesResources = new CastleResources()
  }

  getPossibleCastle(): CalculatePossibleCastleResponse {
    let neededResources = new Resources({
      gold: castleInfo[this._parameters.castle.level].gold,
      castle: {
        wood: castleInfo[this._parameters.castle.level].wood,
        stone: castleInfo[this._parameters.castle.level].stone,
        steel: castleInfo[this._parameters.castle.level].steel,
        boxes: 0,
      },
    })

    while (this.tryAddCastleLevel(neededResources) && this._canUpgradeCastle()) {
      this._parameters.castle.level++
      neededResources = new Resources({
        gold: castleInfo[this._parameters.castle.level].gold,
        castle: {
          wood: castleInfo[this._parameters.castle.level].wood,
          stone: castleInfo[this._parameters.castle.level].stone,
          steel: castleInfo[this._parameters.castle.level].steel,
          boxes: 0,
        },
      })
    }

    if (this._settings.spentToArtifactCastle && this._parameters.castle.level >= 2000) {
      this._spentResourcesToArtifact()
    }

    return {
      oldParameters: this._sourceParameters.getData().params,
      parameters: this._parameters.getData().params,
      sourceResources: this._sourceResources.getData(),
      leftResources: this._leftResources.getData(),
      spentResources: this._spentResources.getData(),
      convertedSource: this._convertedSource.getData(),
      convertedTarget: this._convertedTarget.getData(),
      spentBoxesResources: this._spentBoxesResources.getData(),
    }
  }

  private tryAddCastleLevel(neededResources: Resources) {
    const resultSpentCastle = this._leftResources.castle.spent(
      neededResources.castle,
      this._settings.canUseCastleBoxes,
      this._settings.canConvertCastleResources,
    )

    if (resultSpentCastle.isSuccess) {
      if (this._leftResources.gold >= neededResources.gold) {
        this._leftResources.gold -= neededResources.gold

        this._spentResources.gold += neededResources.gold
        this._spentResources.castle.add(resultSpentCastle.spent)
        this._convertedSource.add(resultSpentCastle.convertedSource)
        this._convertedTarget.add(resultSpentCastle.convertedTarget)
        this._spentBoxesResources.add(resultSpentCastle.spentBoxesResources)

        return true
      }
    }

    return false
  }

  getGoalCastleResources(goalLevel: number): CalculateGoalCastleResponse {
    let levelInfoIndex = this._parameters.castle.level
    let requiredResources = new Resources()

    while (levelInfoIndex <= MAX_CASTLE_LEVEL && levelInfoIndex < goalLevel) {
      requiredResources.castle.wood += castleInfo[levelInfoIndex].wood
      requiredResources.castle.stone += castleInfo[levelInfoIndex].stone
      requiredResources.castle.steel += castleInfo[levelInfoIndex].steel
      requiredResources.gold += castleInfo[levelInfoIndex].gold
      levelInfoIndex++
    }

    const neededResources = requiredResources.clone()
    neededResources.castle.substract(this._sourceResources.castle)
    neededResources.gold -= this._sourceResources.gold

    if (neededResources.gold < 0) neededResources.gold = 0

    return {
      requiredResources: requiredResources.getData(),
      neededResources: neededResources.getData(),
      parameters: this._parameters.getData().params,
      goalLevel,
    }
  }

  private _spentResourcesToArtifact() {
    if (this._settings.canUseCastleBoxes) {
      this._spentBoxesResources.stone += this._leftResources.castle.boxes
      this._spentResources.castle.boxes += this._leftResources.castle.boxes
      this._leftResources.castle.spentBoxes(this._leftResources.castle.boxes, 'stone')
    }
    this._spentResources.castle.add(
      new CastleResources({
        stone: this._leftResources.castle.stone,
        wood: this._leftResources.castle.wood,
        steel: this._leftResources.castle.steel,
        boxes: 0,
      }),
    )
    this._leftResources.castle = new CastleResources()
  }

  private _canUpgradeCastle() {
    return (
      this._parameters.castle.level <= MAX_CASTLE_LEVEL &&
      (!this._settings.spentToArtifactCastle || this._parameters.castle.level < 2000)
    )
  }
}
