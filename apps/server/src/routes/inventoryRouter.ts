import InventoryController from '../controllers/inventory-controller'
import express from 'express'

const inventoryRouter = express.Router()

inventoryRouter.get('/', InventoryController.getInventory)
inventoryRouter.put('/', InventoryController.addItemsToInventory)

export default inventoryRouter
