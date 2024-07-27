import ServerSettingsController from '../controllers/serverSettingsController'
import express from 'express'

const serverSettingsRouter = express.Router()

serverSettingsRouter.get('/', ServerSettingsController.getServerSettings)

export default serverSettingsRouter
