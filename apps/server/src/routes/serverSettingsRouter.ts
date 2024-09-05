import ServerSettingsController from '../controllers/serverSettingsController'
import express from 'express'

const serverSettingsRouter = express.Router()

serverSettingsRouter.get('/', ServerSettingsController.getServerSettings)
serverSettingsRouter.put('/', ServerSettingsController.setServerSettings)

export default serverSettingsRouter
