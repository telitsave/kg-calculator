import InventoryService from '../services/inventory-service'
import BaseController from './base-controller'
import type { NextFunction, Request, Response } from 'express'
import type { SaveInventoryPayload } from 'kg-calculator-typings'


export default class InventoryController extends BaseController {
  static async getInventory(_: Request, res: Response, next: NextFunction) {
    try {
      const profileId = InventoryController.getProfileId(res)
      const data = await InventoryService.getInventory(profileId)
      res.json(data)
    } catch (e) {
      next(e)
    }
  }

  static async addItemsToInventory(req: Request, res: Response, next: NextFunction) {
    try {
      const profileId = InventoryController.getProfileId(res)
      const resources = (req.body.data as SaveInventoryPayload).resources
      await InventoryService.addItemsToInventory(profileId, resources)
      res.json()
    } catch (e) {
      next(e)
    }
  }
}
