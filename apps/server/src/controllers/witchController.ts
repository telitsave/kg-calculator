import ServerSettings from '../model/ServerSettings'
import WitchCalculatorModel from '../model/calculator/witch/WitchCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import { Request, Response } from 'express'
import type { CalculateWitchPayload } from 'kg-calculator-typings'


export default class WitchController {
  static calculateWitch(request: Request, response: Response) {
    const payload: CalculateWitchPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const serverSettings = new ServerSettings(payload.customServerSettings)

    const witchCalculatorModel = new WitchCalculatorModel(resources, parameters, serverSettings)

    response.json(witchCalculatorModel.calculateWitch())
  }
}
