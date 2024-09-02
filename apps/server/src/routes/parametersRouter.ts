import ParametersController from '../controllers/parameters-controller'
import authMiddleware from '../middlewares/auth-middleware'
import profileMiddleware from '../middlewares/profile-middleware'
import express from 'express'


const parametersRouter = express.Router()

parametersRouter.get('/', authMiddleware, profileMiddleware, ParametersController.getParameters)
parametersRouter.put('/', authMiddleware, profileMiddleware, ParametersController.setParameters)

export default parametersRouter
