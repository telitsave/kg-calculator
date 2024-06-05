import { Request, Response } from 'express'
import Resources, { ResourcesData } from '../model/resources/Resources'
import Parameters, { ParametersData } from '../model/parameters/Parameters'
import DragonEmblemsCalculatorModel from '../model/calculator/dragonEmblems/DragonEmblemsCalculatorModel'
import Settings, { SettingsData } from '../model/settings/Settings'

interface CalculatePossibleDragonEmblemsPayload {
  parameters: ParametersData
  resources: ResourcesData
  settings: SettingsData
}

export default class DragonRunesController {
  static getPossibleDragon(request: Request, response: Response) {
    const payload: CalculatePossibleDragonEmblemsPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)

    const dragonEmblemsCalculatorModel = new DragonEmblemsCalculatorModel(resources, parameters, settings)
    
    response.json(dragonEmblemsCalculatorModel.getPossibleDragon())
  }
}
