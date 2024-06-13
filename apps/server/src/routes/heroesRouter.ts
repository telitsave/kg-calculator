import express from 'express'
import HeroesController from '../controllers/heroesController'

const heroesRouter = express.Router()

heroesRouter.get('/all', HeroesController.getAllHeroes)

export default heroesRouter
