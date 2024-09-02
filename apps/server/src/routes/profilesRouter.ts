import ProfileController from '../controllers/profiles-controller'
import authMiddleware from '../middlewares/auth-middleware'
import express from 'express'

const profilesRouter = express.Router()

profilesRouter.get('/', authMiddleware, ProfileController.getProfiles)
profilesRouter.post('/', authMiddleware, ProfileController.createProfile)
profilesRouter.patch('/:profileId', authMiddleware, ProfileController.updateProfile)
profilesRouter.delete('/:profileId', authMiddleware, ProfileController.deleteProfile)

export default profilesRouter
