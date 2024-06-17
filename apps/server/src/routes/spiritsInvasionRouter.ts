import SpiritsInvasionController from '../controllers/spiritsInvasionController'
import express from 'express'

const spiritsInvasionRouter = express.Router()

spiritsInvasionRouter.post('/', SpiritsInvasionController.calculateSpiritsInvasion)

export default spiritsInvasionRouter
