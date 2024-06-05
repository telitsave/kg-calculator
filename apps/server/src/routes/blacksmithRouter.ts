import express from 'express'
import BlacksmithController from '../controllers/blacksmithController'

const blacksmithRouter = express.Router()

blacksmithRouter.post('/', BlacksmithController.calculateBlacksmith)

export default blacksmithRouter
