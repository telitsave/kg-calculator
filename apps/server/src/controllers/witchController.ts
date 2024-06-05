import { Request, Response } from 'express'
import Resources, { ResourcesData } from '../model/resources/Resources'
import Parameters, { ParametersData } from '../model/parameters/Parameters'
import WitchCalculatorModel from '../model/calculator/witch/WitchCalculatorModel'

interface CalculateWitchPayload {
  parameters: ParametersData
  resources: ResourcesData
}

export default class WitchController {
  static calculateWitch(request: Request, response: Response) {
    const payload: CalculateWitchPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)

    const witchCalculatorModel = new WitchCalculatorModel(resources, parameters)

    response.json(witchCalculatorModel.calculateWitch())
  }
}
