import WitchCalculatorModel from '../model/calculator/witch/WitchCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import InventoryService from '../services/inventory-service'
import ParametersService from '../services/parameters-service'
import ServerSettingsService from '../services/serverSettings-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'


export default class WitchController extends BaseController {
  static async calculateWitch(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = WitchController.getProfileId(response)

      const gems = await ParametersService.getGems(profileId)
      const params = await ParametersService.getParameters(profileId)
      const parameters = Parameters.transformDataFromDB(params, gems)
      const resources = Resources.transformDataFromDB(await InventoryService.getInventory(profileId))
      const serverSettings = await ServerSettingsService.getServerSettings(profileId)

      const witchCalculatorModel = new WitchCalculatorModel(resources, parameters, serverSettings)

      response.json(witchCalculatorModel.calculateWitch())
    } catch (err) {
      next(err)
    }
  }
}
