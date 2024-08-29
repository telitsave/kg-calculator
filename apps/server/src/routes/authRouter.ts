import AuthController from '../controllers/auth-controller'
import express from 'express'

const authRouter = express.Router()

authRouter.post('/registration', AuthController.registration)
authRouter.post('/login', AuthController.login)
authRouter.get('/logout', AuthController.logout)
authRouter.post('/activate', AuthController.activate)
authRouter.get('/refresh', AuthController.refreshToken)
authRouter.post('/forgotPassword', AuthController.forgotPassword)
authRouter.post('/resetPassword', AuthController.resetPassword)

export default authRouter
