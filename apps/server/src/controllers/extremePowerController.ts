import BarracksCalculatorModel from '../model/calculator/barracks/BarracksCalculatorModel'
import BlacksmithCalculatorModel from '../model/calculator/blacksmith/BlacksmithCalculatorModel'
import CastleCalculatorModel from '../model/calculator/castle/CastleCalculatorModel'
import DragonEmblemsCalculatorModel from '../model/calculator/dragonEmblems/DragonEmblemsCalculatorModel'
import ExtremePowerEventCalculator from '../model/calculator/events/extremePower/ExtremePowerEventCalculator'
import GalleryCalculatorModel from '../model/calculator/gallery/GalleryCalculatorModel'
import HeroesCalculatorModel from '../model/calculator/heroes/HeroesCalculatorModel'
import WitchCalculatorModel from '../model/calculator/witch/WitchCalculatorModel'
import Parameters from '../model/parameters/Parameters'
import Resources from '../model/resources/Resources'
import Settings from '../model/settings/Settings'
import { Request, Response } from 'express'
import type { CalculateExtremePowerPayload, CalculateTotalExtremePowerPayload } from 'kg-calculator-typings'


export default class ExtremePowerController {
  static calculateScores(request: Request, response: Response) {
    const payload: CalculateExtremePowerPayload = request.body.data
    response.json(ExtremePowerEventCalculator.calculate(new Resources(payload.resources)))
  }

  static calculateAllScores(request: Request, response: Response) {
    const payload: CalculateTotalExtremePowerPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)

    const castleCalculatorModel = new CastleCalculatorModel(resources, parameters, settings)
    const dragonEmblemsCalculatorModel = new DragonEmblemsCalculatorModel(resources, parameters, settings)
    const barracksCalculatorModel = new BarracksCalculatorModel(resources, parameters, settings)
    const witchCalculatorModel = new WitchCalculatorModel(resources, parameters)
    const blacksmithCalculatorModel = new BlacksmithCalculatorModel(resources, parameters)
    const galleryCalculatorModel = new GalleryCalculatorModel(resources, parameters)
    const heroesCalculatorModel = new HeroesCalculatorModel(
      resources,
      settings,
      payload.heroesData,
      payload.heroesDistribution,
    )

    const castleResult = castleCalculatorModel.getPossibleCastle()
    const dragonResult = dragonEmblemsCalculatorModel.getPossibleDragon()
    const witchResult = witchCalculatorModel.calculateWitch()
    barracksCalculatorModel.calculateBarracks()
    const barracksResult = barracksCalculatorModel.getData()
    const blacksmithResult = blacksmithCalculatorModel.calculateBlacksmith()
    const galleryResult = galleryCalculatorModel.calculateGallery()
    const heroesResult = heroesCalculatorModel.calculateHeroes()

    const spentResources = new Resources(castleResult.spentResources)
    spentResources.add(new Resources(dragonResult.spentResources))
    spentResources.add(new Resources(witchResult.spentResources))
    spentResources.add(new Resources(barracksResult.spentResources))
    spentResources.add(new Resources(blacksmithResult.spentResources))
    spentResources.add(new Resources(galleryResult.spentResources))
    spentResources.add(new Resources(heroesResult.spentResources))

    response.json(ExtremePowerEventCalculator.calculate(spentResources))
  }
}
