import BarracksCalculatorModel from '../model/calculator/barracks/BarracksCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import InventoryService from '../services/inventory-service'
import ParametersService from '../services/parameters-service'
import ServerSettingsService from '../services/serverSettings-service'
import SettingsService from '../services/settings-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'


export default class BarracksController extends BaseController {
  static async calculateBarracks(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = BarracksController.getProfileId(response)

      const resources = Resources.transformDataFromDB(await InventoryService.getInventory(profileId))
      const talents = await ParametersService.getTalents(profileId)
      const params = await ParametersService.getParameters(profileId)
      const parameters = Parameters.transformDataFromDB(params, undefined, talents)
      const settings = await SettingsService.getSettings(profileId)
      const serverSettings = await ServerSettingsService.getServerSettings(profileId)

      const barracksCalculatorModel = new BarracksCalculatorModel(resources, parameters, settings, serverSettings)

      barracksCalculatorModel.calculateBarracks()

      response.json(barracksCalculatorModel.getData())
    } catch (err) {
      next(err)
    }
  }
}
