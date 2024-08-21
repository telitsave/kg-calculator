import AuthController from '../controllers/auth-controller'
import express from 'express'

const authRouter = express.Router()

authRouter.post('/registration', AuthController.registration)
authRouter.post('/login', AuthController.login)
authRouter.get('/logout', AuthController.logout)
authRouter.post('/activate', AuthController.activate)
authRouter.get('/refresh', AuthController.refreshToken)

export default authRouter
