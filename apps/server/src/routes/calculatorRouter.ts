import express from 'express'
import castleRouter from './castleRouter'
import extremePowerRouter from './extremePowerRouter'
import dragonRunesRouter from './dragonRunesRouter'
import witchRouter from './witchRouter'
import barracksRouter from './barracksRouter'
import mightiestKingdomRouter from './mightiestKingdomRouter'
import blacksmithRouter from './blacksmithRouter'
import galleryRouter from './galleryRouter'

const calculatorRouter = express.Router()

calculatorRouter.use('/castle', castleRouter)
calculatorRouter.use('/extremePower', extremePowerRouter)
calculatorRouter.use('/mightiestKingdom', mightiestKingdomRouter)
calculatorRouter.use('/dragon', dragonRunesRouter)
calculatorRouter.use('/witch', witchRouter)
calculatorRouter.use('/barracks', barracksRouter)
calculatorRouter.use('/blacksmith', blacksmithRouter)
calculatorRouter.use('/gallery', galleryRouter)

export default calculatorRouter
