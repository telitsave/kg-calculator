import { Request, Response } from 'express'
import type { CalculateBarracksPayload } from 'kg-calculator-typings'
import BarracksCalculatorModel from '../model/calculator/barracks/BarracksCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import Settings from '../model/settings/Settings'


export default class BarracksController {
  static calculateBarracks(request: Request, response: Response) {
    const payload: CalculateBarracksPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)

    const barracksCalculatorModel = new BarracksCalculatorModel(resources, parameters, settings)

    barracksCalculatorModel.calculateBarracks()

    response.json(barracksCalculatorModel.getData())
  }
}
