import mysqlAdapter from '../adapters/mysql-adapter'
import Profile from '../model/profile'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'


export default class ProfileRepository {
  static async createProfile(userId: number, name: string, server?: number): Promise<Profile | null> {
    try {
      const connection = await mysqlAdapter.getConnection()
      const [result] = await connection.execute<ResultSetHeader>(
        'INSERT INTO `profiles` (`userId`, `name`, `serverId`) VALUES (?, ?, ?)',
        [userId, name, server === undefined ? null : server],
      )
      const newProfileId = result.insertId

      return await this.getProfileById(newProfileId)
    } catch (err) {
      throw err
    }
  }

  static async getProfileById(profileId: number): Promise<Profile | null> {
    try {
      const connection = await mysqlAdapter.getConnection()
      const [profiles] = await connection.query<RowDataPacket[]>('SELECT * FROM `profiles` WHERE `id` = ?', [profileId])

      if (profiles.length === 0) return null

      return new Profile(profiles[0])
    } catch (err) {
      throw err
    }
  }

  static async getProfilesByUserId(userId: number): Promise<Profile[]> {
    try {
      const connection = await mysqlAdapter.getConnection()
      const [profiles] = await connection.query<RowDataPacket[]>('SELECT * FROM `profiles` WHERE `userId` = ?', [
        userId,
      ])

      return profiles.map((data) => new Profile(data))
    } catch (err) {
      throw err
    }
  }

  static async updateProfile(profileId: number, data: Partial<Omit<Profile, 'id' | 'userId'>>) {
    try {
      const connection = await mysqlAdapter.getConnection()
      await connection.query('UPDATE `profiles` SET ? WHERE `id` = ?', [data, profileId])
    } catch (err) {
      throw err
    }
  }

  static async deleteProfile(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      await connection.query('DELETE FROM `profiles` WHERE `id` = ?', [profileId])
    } catch (err) {
      throw err
    }
  }
}
