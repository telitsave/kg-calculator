import Parameters from '../model/parameters/Parameters'
import ParametersService from '../services/parameters-service'
import BaseController from './base-controller'
import type { NextFunction, Request, Response } from 'express'
import type { SaveParametersPayload } from 'kg-calculator-typings'


export default class ParametersController extends BaseController {
  static async getParameters(_: Request, res: Response, next: NextFunction) {
    try {
      const profileId = ParametersController.getProfileId(res)
      const data = await ParametersService.getParameters(profileId)
      res.json(data)
    } catch (e) {
      next(e)
    }
  }

  static async setParameters(req: Request, res: Response, next: NextFunction) {
    try {
      const profileId = ParametersController.getProfileId(res)
      const parameters = new Parameters((req.body.data as SaveParametersPayload).parameters)
      await ParametersService.setParameters(profileId, parameters)
      res.json()
    } catch (e) {
      next(e)
    }
  }
}
