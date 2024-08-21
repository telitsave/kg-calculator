import HeroesController from '../controllers/heroesController'
import authMiddleware from '../middlewares/auth-middleware'
import express from 'express'

const heroesRouter = express.Router()

heroesRouter.get('/all', authMiddleware, HeroesController.getAllHeroes)
heroesRouter.post('/heroesInCards', HeroesController.getHeroesInCards)

export default heroesRouter
