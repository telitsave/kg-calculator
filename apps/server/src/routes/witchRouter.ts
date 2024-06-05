import express from 'express'
import WitchController from '../controllers/witchController'

const witchRouter = express.Router()

witchRouter.post('/', WitchController.calculateWitch)

export default witchRouter
