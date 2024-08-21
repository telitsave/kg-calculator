import UserService from '../services/user-service'
import type { NextFunction, Request, Response } from 'express'
import type { ActivationPayload, LoginPayload, RegistrationPayload } from 'kg-calculator-typings'


class AuthController {
  async registration(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body as RegistrationPayload
      await UserService.registration(email, password)

      res.json()
    } catch (err) {
      next(err)
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body as LoginPayload
      const result = await UserService.login(email, password)

      res.cookie('refreshToken', result.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'lax',
      })

      res.json({
        user: result.user,
        accessToken: result.accessToken,
      })
    } catch (err) {
      next(err)
    }
  }

  async logout(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies
      await UserService.logout(refreshToken)
      res.clearCookie('refreshToken')
      res.json()
    } catch (err) {
      next(err)
    }
  }

  async activate(req: Request, res: Response, next: NextFunction) {
    try {
      const { registrationToken } = req.body as ActivationPayload
      await UserService.activateUser(registrationToken)
      res.json()
    } catch (err) {
      next(err)
    }
  }

  async refreshToken(req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken } = req.cookies
      const result = await UserService.refreshToken(refreshToken)

      res.cookie('refreshToken', result.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: 'lax',
      })

      res.json({
        user: result.user,
        accessToken: result.accessToken,
      })
    } catch (err) {
      next(err)
    }
  }
}

export default new AuthController()
