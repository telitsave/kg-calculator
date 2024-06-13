import express from 'express'
import HeroesController from '../controllers/heroesController'

const heroesCalculatorRouter = express.Router()

heroesCalculatorRouter.post('/', HeroesController.calculateHeroes)

export default heroesCalculatorRouter
