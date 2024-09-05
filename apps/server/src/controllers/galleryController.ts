import GalleryCalculatorModel from '../model/calculator/gallery/GalleryCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import InventoryService from '../services/inventory-service'
import ParametersService from '../services/parameters-service'
import BaseController from './base-controller'
import { type NextFunction, Request, Response } from 'express'


export default class GalleryController extends BaseController {
  static async calculateGallery(_: Request, response: Response, next: NextFunction) {
    try {
      const profileId = GalleryController.getProfileId(response)

      const resources = Resources.transformDataFromDB(await InventoryService.getInventory(profileId))
      const parameters = Parameters.transformDataFromDB(await ParametersService.getParameters(profileId))

      const galleryCalculatorModel = new GalleryCalculatorModel(resources, parameters)

      response.json(galleryCalculatorModel.calculateGallery())
    } catch (err) {
      next(err)
    }
  }
}
