import CastleCalculatorModel from '../model/calculator/castle/CastleCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import InventoryService from '../services/inventory-service'
import ParametersService from '../services/parameters-service'
import SettingsService from '../services/settings-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'
import type { CalculateGoalCastlePayload } from 'kg-calculator-typings'


export default class CastleController extends BaseController {
  static async calculatePossibleCastle(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = CastleController.getProfileId(response)

      const resources = Resources.transformDataFromDB(await InventoryService.getInventory(profileId))
      const parameters = Parameters.transformDataFromDB(await ParametersService.getParameters(profileId))
      const settings = await SettingsService.getSettings(profileId)

      const castleCalculatorModel = new CastleCalculatorModel(resources, parameters, settings)

      response.json(castleCalculatorModel.getPossibleCastle())
    } catch (err) {
      next(err)
    }
  }

  static async getGoalCastleResources(request: Request, response: Response, next: NextFunction) {
    try {
      const payload: CalculateGoalCastlePayload = request.body.data
      const profileId = CastleController.getProfileId(response)

      const resources = Resources.transformDataFromDB(await InventoryService.getInventory(profileId))
      const parameters = Parameters.transformDataFromDB(await ParametersService.getParameters(profileId))
      const settings = await SettingsService.getSettings(profileId)

      const castleCalculatorModel = new CastleCalculatorModel(resources, parameters, settings)

      response.json(castleCalculatorModel.getGoalCastleResources(payload.goalLevel))
    } catch (err) {
      next(err)
    }
  }
}
