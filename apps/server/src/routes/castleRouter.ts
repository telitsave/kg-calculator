import express from 'express'
import CastleController from '../controllers/castleController'

const castleRouter = express.Router()

castleRouter.post('/possibleCastle', CastleController.calculatePossibleCastle)
castleRouter.post('/goalCastle', CastleController.getGoalCastleResources)

export default castleRouter
