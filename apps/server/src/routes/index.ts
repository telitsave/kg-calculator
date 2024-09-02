import authRouter from './authRouter'
import calculatorRouter from './calculatorRouter'
import heroesRouter from './heroesRouter'
import inventoryRouter from './inventoryRouter'
import parametersRouter from './parametersRouter'
import profilesRouter from './profilesRouter'
import serverSettingsRouter from './serverSettingsRouter'
import spiritsInvasionRouter from './spiritsInvasionRouter'
import express from 'express'


const router = express.Router()

router.use('/auth', authRouter)
router.use('/calculator', calculatorRouter)
router.use('/spiritsInvasion', spiritsInvasionRouter)
router.use('/heroes', heroesRouter)
router.use('/serverSettings', serverSettingsRouter)
router.use('/profiles', profilesRouter)
router.use('/inventory', inventoryRouter)
router.use('/parameters', parametersRouter)

export default router
