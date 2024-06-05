import { Request, Response } from 'express'
import Resources, { ResourcesData } from '../model/resources/Resources'
import Parameters, { ParametersData } from '../model/parameters/Parameters'
import Settings, { SettingsData } from '../model/settings/Settings'
import BarracksCalculatorModel from '../model/calculator/barracks/BarracksCalculatorModel'

interface CalculateBarracksPayload {
  parameters: ParametersData
  resources: ResourcesData
  settings: SettingsData
}

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
