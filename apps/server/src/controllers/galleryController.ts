import { Request, Response } from 'express'
import Resources from '../model/resources/Resources'
import Parameters  from '../model/parameters/Parameters'
import GalleryCalculatorModel from '../model/calculator/gallery/GalleryCalculatorModel'
import type { CalculateGalleryPayload } from 'kg-calculator-typings'


export default class GalleryController {
  static calculateGallery(request: Request, response: Response) {
    const payload: CalculateGalleryPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)

    const galleryCalculatorModel = new GalleryCalculatorModel(resources, parameters)

    response.json(galleryCalculatorModel.calculateGallery())
  }
}
