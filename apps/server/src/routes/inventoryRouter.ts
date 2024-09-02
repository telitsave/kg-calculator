import InventoryController from '../controllers/inventory-controller'
import authMiddleware from '../middlewares/auth-middleware'
import profileMiddleware from '../middlewares/profile-middleware'
import express from 'express'


const inventoryRouter = express.Router()

inventoryRouter.get('/', authMiddleware, profileMiddleware, InventoryController.getInventory)
inventoryRouter.put('/', authMiddleware, profileMiddleware, InventoryController.addItemsToInventory)

export default inventoryRouter
