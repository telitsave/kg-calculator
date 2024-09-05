import ParametersService from '../services/parameters-service'
import BaseController from './base-controller'
import type { NextFunction, Request, Response } from 'express'
import type { SaveGemsPayload, SaveParametersPayload, SaveTalentsPayload } from 'kg-calculator-typings'


export default class ParametersController extends BaseController {
  static async getParameters(_: Request, res: Response, next: NextFunction) {
    try {
      const profileId = ParametersController.getProfileId(res)
      const data = await ParametersService.getAllParameters(profileId)
      res.json(data)
    } catch (e) {
      next(e)
    }
  }

  static async setParameters(req: Request, res: Response, next: NextFunction) {
    try {
      const profileId = ParametersController.getProfileId(res)
      const parameters = (req.body.data as SaveParametersPayload).parameters
      await ParametersService.setParameters(profileId, parameters)
      res.json()
    } catch (e) {
      next(e)
    }
  }

  static async setGems(req: Request, res: Response, next: NextFunction) {
    try {
      const profileId = ParametersController.getProfileId(res)
      const parameters = (req.body.data as SaveGemsPayload).gems
      await ParametersService.setGems(profileId, parameters)
      res.json()
    } catch (e) {
      next(e)
    }
  }

  static async setTalents(req: Request, res: Response, next: NextFunction) {
    try {
      const profileId = ParametersController.getProfileId(res)
      const parameters = (req.body.data as SaveTalentsPayload).talents
      await ParametersService.setTalents(profileId, parameters)
      res.json()
    } catch (e) {
      next(e)
    }
  }
}
