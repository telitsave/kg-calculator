import CastleResources from '../../resources/CastleResources'
import castleInfo from './castleInfo.json'
import Resources from '../../resources/Resources'
import Parameters from '../../parameters/Parameters'
import Settings from '../../settings/Settings'
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

    while (this.tryAddCastleLevel(neededResources) && this._parameters.castle.level <= MAX_CASTLE_LEVEL) {
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

    return {
      oldParameters: this._sourceParameters.getData(),
      parameters: this._parameters.getData(),
      sourceResources: this._sourceResources,
      leftResources: this._leftResources,
      spentResources: this._spentResources,
      convertedSource: this._convertedSource,
      convertedTarget: this._convertedTarget,
      spentBoxesResources: this._spentBoxesResources,
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

    return { requiredResources, neededResources, parameters: this._parameters.getData(), goalLevel }
  }
}
