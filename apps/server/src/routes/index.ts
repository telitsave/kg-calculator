import authMiddleware from '../middlewares/auth-middleware'
import profileMiddleware from '../middlewares/profile-middleware'
import authRouter from './authRouter'
import calculatorRouter from './calculatorRouter'
import heroesRouter from './heroesRouter'
import inventoryRouter from './inventoryRouter'
import parametersRouter from './parametersRouter'
import profilesRouter from './profilesRouter'
import serverSettingsRouter from './serverSettingsRouter'
import settingsRouter from './settingsRouter'
import spiritsInvasionRouter from './spiritsInvasionRouter'
import express from 'express'


const router = express.Router()

router.use('/auth', authRouter)
router.use('/calculator', authMiddleware, profileMiddleware, calculatorRouter)
router.use('/spiritsInvasion', spiritsInvasionRouter)
router.use('/heroes', heroesRouter)
router.use('/settings', authMiddleware, profileMiddleware, settingsRouter)
router.use('/serverSettings', authMiddleware, profileMiddleware, serverSettingsRouter)
router.use('/profiles', authMiddleware, profilesRouter)
router.use('/inventory', authMiddleware, profileMiddleware, inventoryRouter)
router.use('/parameters', authMiddleware, profileMiddleware, parametersRouter)

export default router
