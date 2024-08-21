import ApiError from '../model/exceptions/ApiError'
import UserRepository from '../repositories/user-repository'
import MailService from './mail-service'
import TokenService from './token-service'
import bcrypt from 'bcrypt'
import { v4 as uuidV4 } from 'uuid'


export default class UserService {
  static async registration(email: string, password: string) {
    const user = await UserRepository.getUserByEmail(email)
    if (user) {
      throw ApiError.BadRequestError('Пользователь с такой почтой уже зарегистрирован')
    }

    const passwordHash = await bcrypt.hash(password, 3)
    const registrationToken = uuidV4()

    await UserRepository.createUser(email, passwordHash, registrationToken)
    MailService.sendActivationMail(email, registrationToken)
  }

  static async activateUser(registrationToken: string) {
    const user = await UserRepository.getUserByRegistrationToken(registrationToken)

    if (!user) {
      throw ApiError.BadRequestError('Токен активации недействителен')
    }

    await UserRepository.activateUser(user.id)
  }

  static async login(email: string, password: string) {
    const user = await UserRepository.getUserByEmail(email)

    if (!user) {
      throw ApiError.BadRequestError('Логин или пароль неверные')
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      throw ApiError.BadRequestError('Логин или пароль неверные')
    }

    const tokens = TokenService.generateTokens(user.getDto())
    try {
      if (user.refreshTokens.length >= 3) {
        await TokenService.setToken(user.id, tokens.refreshToken, tokens.expiresIn, user.refreshTokens[0])
      } else {
        await TokenService.setToken(user.id, tokens.refreshToken, tokens.expiresIn)
      }
    } catch (e) {
      throw ApiError.BadRequestError('Ошибка авторизации')
    }
    return { ...tokens, user: user.getDto() }
  }

  static async logout(refreshToken?: string) {
    if (refreshToken) {
      await TokenService.removeToken(refreshToken)
    }
  }

  static async refreshToken(refreshToken?: string) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError()
    }
    const userData = TokenService.validateRefreshToken(refreshToken)
    if (!userData) {
      throw ApiError.UnauthorizedError()
    }
    const user = await UserRepository.getUserById(userData.id)
    if (!user) {
      throw ApiError.BadRequestError('Ошибка при обновлении авторизации')
    }
    if (!user.refreshTokens.includes(refreshToken)) {
      throw ApiError.UnauthorizedError()
    }

    const tokens = TokenService.generateTokens(user.getDto())
    try {
      await TokenService.setToken(user.id, tokens.refreshToken, tokens.expiresIn, refreshToken)
    } catch (e) {
      throw ApiError.BadRequestError('Ошибка при обновлении авторизации')
    }
    return { ...tokens, user: user.getDto() }
  }
}
