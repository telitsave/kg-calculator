import HeroesCalculatorModel from '../model/calculator/heroes/HeroesCalculatorModel'
import HeroesModel from '../model/heroes/HeroesModel'
import Resources from '../model/resources/Resources'
import { Request, Response } from 'express'
import type { CalculateHeroesPayload } from 'kg-calculator-typings'


export default class HeroesController {
  static calculateHeroes(request: Request, response: Response) {
    const payload: CalculateHeroesPayload = request.body.data

    const resources = new Resources(payload.resources)

    const heroesCalculatorModel = new HeroesCalculatorModel(resources)

    response.json(heroesCalculatorModel.calculateHeroes())
  }

  static getAllHeroes(request: Request, response: Response) {
    const heroesModel = new HeroesModel()

    response.json(heroesModel.getAllHeroes())
  }

  static getHeroesInCards(request: Request, response: Response) {
    const heroesModel = new HeroesModel()

    response.json(heroesModel.getHeroesInCards(55))
  }
}
