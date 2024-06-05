import { Request, Response } from 'express'
import CastleCalculatorModel from '../model/calculator/castle/CastleCalculatorModel'
import Resources, { ResourcesData } from '../model/resources/Resources'
import Parameters, { ParametersData } from '../model/parameters/Parameters'
import Settings, { SettingsData } from '../model/settings/Settings'

interface CalculatePossibleCastlePayload {
  resources: ResourcesData
  parameters: ParametersData
  settings: SettingsData
}

interface GetGoalCastleResourcesPayload {
  resources: ResourcesData
  parameters: ParametersData
  settings: SettingsData
  goalLevel: number
}

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
    const payload: GetGoalCastleResourcesPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)

    const castleCalculatorModel = new CastleCalculatorModel(resources, parameters, settings)

    response.json(castleCalculatorModel.getGoalCastleResources(payload.goalLevel))
  }
}
