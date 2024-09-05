import BlacksmithCalculatorModel from '../model/calculator/blacksmith/BlacksmithCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import InventoryService from '../services/inventory-service'
import ParametersService from '../services/parameters-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'


export default class BlacksmithController extends BaseController {
  static async calculateBlacksmith(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = BlacksmithController.getProfileId(response)

      const resources = Resources.transformDataFromDB(await InventoryService.getInventory(profileId))
      const parameters = Parameters.transformDataFromDB(await ParametersService.getParameters(profileId))

      const blacksmithCalculatorModel = new BlacksmithCalculatorModel(resources, parameters)

      response.json(blacksmithCalculatorModel.calculateBlacksmith())
    } catch (err) {
      next(err)
    }
  }
}
