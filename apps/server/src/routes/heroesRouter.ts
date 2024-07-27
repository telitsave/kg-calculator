import HeroesController from '../controllers/heroesController'
import express from 'express'

const heroesRouter = express.Router()

heroesRouter.get('/all', HeroesController.getAllHeroes)
heroesRouter.post('/heroesInCards', HeroesController.getHeroesInCards)

export default heroesRouter
