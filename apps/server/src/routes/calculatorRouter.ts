import express from 'express'
import barracksRouter from './barracksRouter'
import blacksmithRouter from './blacksmithRouter'
import castleRouter from './castleRouter'
import dragonRunesRouter from './dragonRunesRouter'
import extremePowerRouter from './extremePowerRouter'
import galleryRouter from './galleryRouter'
import heroesCalculatorRouter from './heroesCalculatorRouter'
import mightiestKingdomRouter from './mightiestKingdomRouter'
import witchRouter from './witchRouter'


const calculatorRouter = express.Router()

calculatorRouter.use('/castle', castleRouter)
calculatorRouter.use('/extremePower', extremePowerRouter)
calculatorRouter.use('/mightiestKingdom', mightiestKingdomRouter)
calculatorRouter.use('/dragon', dragonRunesRouter)
calculatorRouter.use('/witch', witchRouter)
calculatorRouter.use('/barracks', barracksRouter)
calculatorRouter.use('/blacksmith', blacksmithRouter)
calculatorRouter.use('/gallery', galleryRouter)
calculatorRouter.use('/heroes', heroesCalculatorRouter)

export default calculatorRouter
