import InventoryRepository from '../repositories/inventory-repository'
import type { ResourceType, Resources } from 'kg-calculator-typings'

export default class InventoryService {
  static async getInventory(profileId: number) {
    const data = await InventoryRepository.getInventory(profileId)
    const result: Resources = {}
    data.forEach((item) => {
      result[item.itemId] = item.count
    })
    return result
  }

  static async addItemsToInventory(profileId: number, resources: Resources) {
    const data = Object.entries(resources).map(([key, value]) => ({
      itemId: key as ResourceType,
      count: value,
    }))
    await InventoryRepository.addItems(profileId, data)
  }

  static async removeInventory(profileId: number) {
    await InventoryRepository.removeItems(profileId)
  }
}
