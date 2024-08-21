import authRouter from './authRouter'
import calculatorRouter from './calculatorRouter'
import heroesRouter from './heroesRouter'
import serverSettingsRouter from './serverSettingsRouter'
import spiritsInvasionRouter from './spiritsInvasionRouter'
import express from 'express'


const router = express.Router()

router.use('/auth', authRouter)
router.use('/calculator', calculatorRouter)
router.use('/spiritsInvasion', spiritsInvasionRouter)
router.use('/heroes', heroesRouter)
router.use('/serverSettings', serverSettingsRouter)

export default router
