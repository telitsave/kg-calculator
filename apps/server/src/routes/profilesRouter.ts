import ProfileController from '../controllers/profiles-controller'
import express from 'express'

const profilesRouter = express.Router()

profilesRouter.get('/', ProfileController.getProfiles)
profilesRouter.post('/', ProfileController.createProfile)
profilesRouter.patch('/:profileId', ProfileController.updateProfile)
profilesRouter.delete('/:profileId', ProfileController.deleteProfile)

export default profilesRouter
