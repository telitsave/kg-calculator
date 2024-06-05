import express from 'express'
import ExtremePowerController from '../controllers/extremePowerController'

const extremePowerRouter = express.Router()

extremePowerRouter.post('/', ExtremePowerController.calculateScores)
extremePowerRouter.post('/total', ExtremePowerController.calculateAllScores)

export default extremePowerRouter
