import express from 'express'
import HeroesController from '../controllers/heroesController'

const heroesRouter = express.Router()

heroesRouter.post('/', HeroesController.calculateHeroes)

export default heroesRouter
