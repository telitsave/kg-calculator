import { Request, Response } from 'express'
import Resources from '../model/resources/Resources'
import Parameters from '../model/parameters/Parameters'
import DragonEmblemsCalculatorModel from '../model/calculator/dragonEmblems/DragonEmblemsCalculatorModel'
import Settings from '../model/settings/Settings'
import type { CalculatePossibleDragonPayload } from 'kg-calculator-typings'

export default class DragonRunesController {
  static getPossibleDragon(request: Request, response: Response) {
    const payload: CalculatePossibleDragonPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)

    const dragonEmblemsCalculatorModel = new DragonEmblemsCalculatorModel(resources, parameters, settings)

    response.json(dragonEmblemsCalculatorModel.getPossibleDragon())
  }
}
