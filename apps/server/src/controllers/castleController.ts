import { Request, Response } from 'express'
import CastleCalculatorModel from '../model/calculator/castle/CastleCalculatorModel'
import Resources from '../model/resources/Resources'
import Parameters from '../model/parameters/Parameters'
import Settings from '../model/settings/Settings'
import type { CalculateGoalCastlePayload, CalculatePossibleCastlePayload } from 'kg-calculator-typings'

export default class CastleController {
  static calculatePossibleCastle(request: Request, response: Response) {
    const payload: CalculatePossibleCastlePayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)

    const castleCalculatorModel = new CastleCalculatorModel(resources, parameters, settings)

    response.json(castleCalculatorModel.getPossibleCastle())
  }

  static getGoalCastleResources(request: Request, response: Response) {
    const payload: CalculateGoalCastlePayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)

    const castleCalculatorModel = new CastleCalculatorModel(resources, parameters, settings)

    response.json(castleCalculatorModel.getGoalCastleResources(payload.goalLevel))
  }
}
