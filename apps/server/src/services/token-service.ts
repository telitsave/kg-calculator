import User from '../model/user'
import UserRepository from '../repositories/user-repository'
import dayjs from 'dayjs'
import jwt from 'jsonwebtoken'

export default class TokenService {
  static generateTokens(payload: any) {
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY_ACCESS as string, {
      expiresIn: '30m',
    })
    const refreshToken = jwt.sign(payload, process.env.SECRET_KEY_REFRESH as string, {
      expiresIn: '30d',
    })

    const expiresInDate = dayjs()
    expiresInDate.add(30, 'days')

    return {
      accessToken,
      refreshToken,
      expiresIn: expiresInDate.toDate(),
    }
  }

  static async setToken(userId: number, refreshToken: string, expiresIn: Date, oldRefreshToken?: string) {
    try {
      await UserRepository.setUserRefreshToken(userId, refreshToken, expiresIn, oldRefreshToken)
    } catch (err) {
      throw err
    }
  }

  static async removeToken(refreshToken: string) {
    try {
      await UserRepository.removeRefreshToken(refreshToken)
    } catch (err) {
      throw err
    }
  }

  static validateAccessToken(accessToken: string) {
    try {
      const userData = jwt.verify(accessToken, process.env.SECRET_KEY_ACCESS as string)
      return userData as ReturnType<User['getDto']> & { profiles: number[] }
    } catch (err) {
      return null
    }
  }

  static validateRefreshToken(refreshToken: string) {
    try {
      const userData = jwt.verify(refreshToken, process.env.SECRET_KEY_REFRESH as string)
      return userData as ReturnType<User['getDto']> & { profiles: number[] }
    } catch (err) {
      return null
    }
  }
}
