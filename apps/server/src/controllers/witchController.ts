import { Request, Response } from 'express'
import Resources  from '../model/resources/Resources'
import Parameters from '../model/parameters/Parameters'
import WitchCalculatorModel from '../model/calculator/witch/WitchCalculatorModel'
import type { CalculateWitchPayload } from 'kg-calculator-typings'


export default class WitchController {
  static calculateWitch(request: Request, response: Response) {
    const payload: CalculateWitchPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)

    const witchCalculatorModel = new WitchCalculatorModel(resources, parameters)

    response.json(witchCalculatorModel.calculateWitch())
  }
}
