import barracksRouter from './barracksRouter'
import blacksmithRouter from './blacksmithRouter'
import castleRouter from './castleRouter'
import dragonRunesRouter from './dragonRunesRouter'
import galleryRouter from './galleryRouter'
import heroesCalculatorRouter from './heroesCalculatorRouter'
import mightiestKingdomRouter from './mightiestKingdomRouter'
import ultimatePowerRouter from './ultimatePowerRouter'
import witchRouter from './witchRouter'
import express from 'express'


const calculatorRouter = express.Router()

calculatorRouter.use('/castle', castleRouter)
calculatorRouter.use('/ultimatePower', ultimatePowerRouter)
calculatorRouter.use('/mightiestKingdom', mightiestKingdomRouter)
calculatorRouter.use('/dragon', dragonRunesRouter)
calculatorRouter.use('/witch', witchRouter)
calculatorRouter.use('/barracks', barracksRouter)
calculatorRouter.use('/blacksmith', blacksmithRouter)
calculatorRouter.use('/gallery', galleryRouter)
calculatorRouter.use('/heroes', heroesCalculatorRouter)

export default calculatorRouter
