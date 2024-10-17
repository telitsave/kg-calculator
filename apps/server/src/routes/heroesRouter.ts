import HeroesController from '../controllers/heroesController'
import authMiddleware from '../middlewares/auth-middleware'
import profileMiddleware from '../middlewares/profile-middleware'
import express from 'express'


const heroesRouter = express.Router()

heroesRouter.get('/', authMiddleware, profileMiddleware, HeroesController.getHeroesParams)
heroesRouter.put('/', authMiddleware, profileMiddleware, HeroesController.setHeroesParams)
heroesRouter.get('/all', authMiddleware, HeroesController.getAllHeroes)
heroesRouter.get('/table', authMiddleware, profileMiddleware, HeroesController.getHeroesTable)
heroesRouter.get('/tableSimple', HeroesController.getHeroesTableSimple)

export default heroesRouter
