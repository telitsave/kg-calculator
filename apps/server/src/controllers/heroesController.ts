import { Request, Response } from 'express'
import Resources from '../model/resources/Resources'
import type { CalculateHeroesPayload } from 'kg-calculator-typings'
import HeroesCalculatorModel from '../model/calculator/heroes/HeroesCalculatorModel'

export default class HeroesController {
  static calculateHeroes(request: Request, response: Response) {
    const payload: CalculateHeroesPayload = request.body.data

    const resources = new Resources(payload.resources)

    const heroesCalculatorModel = new HeroesCalculatorModel(resources)

    response.json(heroesCalculatorModel.calculateHeroes())
  }
}
