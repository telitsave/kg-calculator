import { Request, Response } from 'express'
import Resources, { ResourcesData } from '../model/resources/Resources'
import Parameters, { ParametersData } from '../model/parameters/Parameters'
import GalleryCalculatorModel from '../model/calculator/gallery/GalleryCalculatorModel'

interface CalculateGalleryPayload {
  resources: ResourcesData
  parameters: ParametersData
}

export default class GalleryController {
  static calculateGallery(request: Request, response: Response) {
    const payload: CalculateGalleryPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)

    const galleryCalculatorModel = new GalleryCalculatorModel(resources, parameters)

    response.json(galleryCalculatorModel.calculateGallery())
  }
}
