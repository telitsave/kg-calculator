import SettingsController from '../controllers/settings-controller'
import express from 'express'

const settingsRouter = express.Router()

settingsRouter.get('/', SettingsController.getSettings)
settingsRouter.put('/', SettingsController.setSettings)

export default settingsRouter
