import UltimatePowerController from '../controllers/ultimatePowerController'
import express from 'express'

const ultimatePowerRouter = express.Router()

ultimatePowerRouter.post('/', UltimatePowerController.calculateScores)
ultimatePowerRouter.post('/total', UltimatePowerController.calculateAllScores)

export default ultimatePowerRouter
