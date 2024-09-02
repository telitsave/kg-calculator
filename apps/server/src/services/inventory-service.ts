import type Resources from '../model/resources/Resources'
import InventoryRepository from '../repositories/inventory-repository'

export default class InventoryService {
  static async getInventory(profileId: number) {
    return InventoryRepository.getInventory(profileId)
  }

  static async addItemsToInventory(profileId: number, resources: Resources) {
    await InventoryRepository.addItems(profileId, resources.getDataForDB())
  }

  static async removeInventory(profileId: number) {
    await InventoryRepository.removeItems(profileId)
  }
}
