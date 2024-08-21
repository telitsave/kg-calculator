import mysqlAdapter from '../adapters/mysql-adapter'
import User from '../model/user'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'


export default class UserRepository {
  static async getUserById(userId: number): Promise<User | null> {
    try {
      const connection = await mysqlAdapter.getConnection()
      const [users] = await connection.query<RowDataPacket[]>('SELECT * FROM `users` WHERE `id` = ?', [userId])

      if (users.length === 0) return null

      const [refreshTokens] = await connection.query<RowDataPacket[]>(
        'SELECT * FROM `users_tokens` WHERE `user_id` = ?',
        [userId],
      )

      return new User(users[0], refreshTokens)
    } catch (err) {
      throw err
    }
  }

  static async getUserByEmail(email: string): Promise<User | null> {
    try {
      const connection = await mysqlAdapter.getConnection()
      const [users] = await connection.query<RowDataPacket[]>('SELECT * FROM `users` WHERE `email` = ?', [email])

      if (users.length === 0) return null

      const [refreshTokens] = await connection.query<RowDataPacket[]>(
        'SELECT * FROM `users_tokens` WHERE `user_id` = ?',
        [users[0].id],
      )

      return new User(users[0], refreshTokens)
    } catch (err) {
      throw err
    }
  }

  static async getUserByRegistrationToken(registrationToken: string): Promise<User | null> {
    try {
      const connection = await mysqlAdapter.getConnection()
      const [users] = await connection.query<RowDataPacket[]>('SELECT * FROM users WHERE registration_token = ?', [
        registrationToken,
      ])

      if (users.length === 0) return null

      const [refreshTokens] = await connection.query<RowDataPacket[]>('SELECT * FROM users_tokens WHERE user_id = ?', [
        users[0].id,
      ])

      return new User(users[0], refreshTokens)
    } catch (err) {
      throw err
    }
  }

  static async createUser(email: string, password: string, registrationToken: string): Promise<User> {
    try {
      const connection = await mysqlAdapter.getConnection()
      const [result] = await connection.execute<ResultSetHeader>(
        'INSERT INTO `users` (`email`, `password`, `registration_token`) VALUES (?, ?, ?)',
        [email, password, registrationToken],
      )
      const newUserId = result.insertId

      return await this.getUserById(newUserId)
    } catch (err) {
      throw err
    }
  }

  static async activateUser(userId: number): Promise<void> {
    try {
      const connection = await mysqlAdapter.getConnection()
      await connection.execute('UPDATE `users` SET `confirmed` = 1, `registration_token` = NULL WHERE `id` = ?', [
        userId,
      ])
    } catch (err) {
      throw err
    }
  }

  static async setUserRefreshToken(
    userId: number,
    refreshToken: string,
    expires: Date,
    oldRefreshToken?: string,
  ): Promise<void> {
    try {
      const connection = await mysqlAdapter.getConnection()
      if (oldRefreshToken) {
        await connection.execute(
          'UPDATE `users_tokens` SET `refresh_token` = ?, `expires_in` = ? WHERE `user_id` = ? AND `refresh_token` = ?',
          [refreshToken, expires, userId, oldRefreshToken],
        )
      } else {
        await connection.execute(
          'INSERT INTO `users_tokens` (`user_id`, `refresh_token`, `expires_in`) VALUES (?, ?, ?)',
          [userId, refreshToken, expires],
        )
      }
    } catch (err) {
      throw err
    }
  }

  static async removeRefreshToken(refreshToken: string) {
    try {
      const connection = await mysqlAdapter.getConnection()
      await connection.execute('DELETE FROM `users_tokens` WHERE `refresh_token` = ?', [refreshToken])
    } catch (err) {
      throw err
    }
  }
}
