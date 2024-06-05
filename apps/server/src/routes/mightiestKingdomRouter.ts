import express from 'express'
import MightiestKingdomController from '../controllers/mightiestKingdomController'

const mightiestKingdomRouter = express.Router()

mightiestKingdomRouter.post('/', MightiestKingdomController.calculateScores)
mightiestKingdomRouter.post('/total', MightiestKingdomController.calculateAllScores)

export default mightiestKingdomRouter
