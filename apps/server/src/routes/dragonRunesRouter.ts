import express from 'express'
import DragonRunesController from '../controllers/dragonRunesController'

const dragonRunesRouter = express.Router()

dragonRunesRouter.post('/possibleDragon', DragonRunesController.getPossibleDragon)

export default dragonRunesRouter
