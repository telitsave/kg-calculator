import CastleCalculatorModel from '../model/calculator/castle/CastleCalculatorModel'
import DragonEmblemsCalculatorModel from '../model/calculator/dragonEmblems/DragonEmblemsCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import InventoryService from '../services/inventory-service'
import ParametersService from '../services/parameters-service'
import SettingsService from '../services/settings-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'


export default class DragonRunesController extends BaseController {
  static async getPossibleDragon(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = DragonRunesController.getProfileId(response)

      const resources = Resources.transformDataFromDB(await InventoryService.getInventory(profileId))
      const parameters = Parameters.transformDataFromDB(await ParametersService.getParameters(profileId))
      const settings = await SettingsService.getSettings(profileId)

      let castleLevel: number | undefined
      if (settings.useCastleLimit) {
        castleLevel = parameters.castle.level
        if (settings.usePossibleCastleLimit) {
          const castleCalculatorModel = new CastleCalculatorModel(resources, parameters, settings)
          const {
            parameters: { castleParams_level },
          } = castleCalculatorModel.getPossibleCastle()
          castleLevel = castleParams_level
        }
      }

      const dragonEmblemsCalculatorModel = new DragonEmblemsCalculatorModel(
        resources,
        parameters,
        settings,
        castleLevel,
      )

      response.json(dragonEmblemsCalculatorModel.getPossibleDragon())
    } catch (err) {
      next(err)
    }
  }
}
