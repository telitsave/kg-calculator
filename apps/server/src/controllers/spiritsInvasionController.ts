import SpiritsInvasionModel from '../model/calculator/events/spiritsInvasion/SpiritsInvasionModel'
import { Request, Response } from 'express'
import type { GetSpiritsInvasionPayload } from 'kg-calculator-typings'


export default class SpiritsInvasionController {
  static calculateSpiritsInvasion(request: Request, response: Response) {
    const payload: GetSpiritsInvasionPayload = request.body.data

    const spiritsInvasionModel = new SpiritsInvasionModel(payload.level, payload.membersCount)

    response.json(spiritsInvasionModel.calculateData())
  }
}
