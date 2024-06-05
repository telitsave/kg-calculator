import { Request, Response } from 'express'
import Resources, { ResourcesData } from '../model/resources/Resources'
import Parameters, { ParametersData } from '../model/parameters/Parameters'
import BlacksmithCalculatorModel from '../model/calculator/blacksmith/BlacksmithCalculatorModel'

interface CalculateBlacksmithPayload {
  resources: ResourcesData
  parameters: ParametersData
}

export default class BlacksmithController {
  static calculateBlacksmith(request: Request, response: Response) {
    const payload: CalculateBlacksmithPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)

    const blacksmithCalculatorModel = new BlacksmithCalculatorModel(resources, parameters)

    response.json(blacksmithCalculatorModel.calculateBlacksmith())
  }
}
