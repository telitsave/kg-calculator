import express from 'express'
import BarracksController from '../controllers/barracksController'

const barracksRouter = express.Router()

barracksRouter.post('/', BarracksController.calculateBarracks)

export default barracksRouter
