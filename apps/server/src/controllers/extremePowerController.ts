import { Request, Response } from 'express'
import ExtremePowerEventCalculator from '../model/calculator/events/extremePower/ExtremePowerEventCalculator'
import Resources, { ResourcesData } from '../model/resources/Resources'
import Parameters, { ParametersData } from '../model/parameters/Parameters'
import CastleCalculatorModel from '../model/calculator/castle/CastleCalculatorModel'
import DragonEmblemsCalculatorModel from '../model/calculator/dragonEmblems/DragonEmblemsCalculatorModel'
import WitchCalculatorModel from '../model/calculator/witch/WitchCalculatorModel'
import Settings, { SettingsData } from '../model/settings/Settings'
import BarracksCalculatorModel from '../model/calculator/barracks/BarracksCalculatorModel'
import BlacksmithCalculatorModel from '../model/calculator/blacksmith/BlacksmithCalculatorModel'
import GalleryCalculatorModel from '../model/calculator/gallery/GalleryCalculatorModel'

interface calculateScoresPayload {
  resources: ResourcesData
}

interface calculateAllScoresPayload {
  resources: ResourcesData
  parameters: ParametersData
  settings: SettingsData
}

export default class ExtremePowerController {
  static calculateScores(request: Request, response: Response) {
    const payload: calculateScoresPayload = request.body.data
    response.json(ExtremePowerEventCalculator.calculate(new Resources(payload.resources)))
  }

  static calculateAllScores(request: Request, response: Response) {
    const payload: calculateAllScoresPayload = request.body.data

    const resources = new Resources(payload.resources)
    const parameters = new Parameters(payload.parameters)
    const settings = new Settings(payload.settings)

    const castleCalculatorModel = new CastleCalculatorModel(resources, parameters, settings)
    const dragonEmblemsCalculatorModel = new DragonEmblemsCalculatorModel(resources, parameters, settings)
    const barracksCalculatorModel = new BarracksCalculatorModel(resources, parameters, settings)
    const witchCalculatorModel = new WitchCalculatorModel(resources, parameters)
    const blacksmithCalculatorModel = new BlacksmithCalculatorModel(resources, parameters)
    const galleryCalculatorModel = new GalleryCalculatorModel(resources, parameters)

    const castleResult = castleCalculatorModel.getPossibleCastle()
    const dragonResult = dragonEmblemsCalculatorModel.getPossibleDragon()
    const witchResult = witchCalculatorModel.calculateWitch()
    barracksCalculatorModel.calculateBarracks()
    const barracksResult = barracksCalculatorModel.getData()
    const blacksmithResult = blacksmithCalculatorModel.calculateBlacksmith()
    const galleryResult = galleryCalculatorModel.calculateGallery()

    const spentResources = castleResult.spentResources.clone()
    spentResources.add(dragonResult.spentResources)
    spentResources.add(witchResult.spentResources)
    spentResources.add(barracksResult.spentResources)
    spentResources.add(blacksmithResult.spentResources)
    spentResources.add(galleryResult.spentResources)

    response.json(ExtremePowerEventCalculator.calculate(spentResources))
  }
}
