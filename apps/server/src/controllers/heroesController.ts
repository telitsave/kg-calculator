import ServerSettings from '../model/ServerSettings'
import HeroesCalculatorModel from '../model/calculator/heroes/HeroesCalculatorModel'
import HeroesModel from '../model/heroes/HeroesModel'
import Resources from '../model/resources/Resources'
import Settings from '../model/settings/Settings'
import { Request, Response } from 'express'
import type { CalculateHeroesPayload, GetHeroesInCardsPayload } from 'kg-calculator-typings'


export default class HeroesController {
  static calculateHeroes(request: Request, response: Response) {
    const payload: CalculateHeroesPayload = request.body.data

    const resources = new Resources(payload.resources)
    const settings = new Settings(payload.settings)

    const heroesCalculatorModel = new HeroesCalculatorModel(
      resources,
      settings,
      payload.heroesData,
      payload.heroesDistribution,
    )

    response.json(heroesCalculatorModel.calculateHeroes())
  }

  static getAllHeroes(_: Request, response: Response) {
    const heroesModel = new HeroesModel()

    response.json(heroesModel.getAllHeroes())
  }

  static getHeroesInCards(request: Request, response: Response) {
    const payload: GetHeroesInCardsPayload = request.body.data
    const serverSettings = new ServerSettings(payload.customServerSettings)
    const heroesModel = new HeroesModel()

    response.json(heroesModel.getHeroesInCards(serverSettings))
  }
}
