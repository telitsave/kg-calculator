import mysqlAdapter from '../adapters/mysql-adapter'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'

export interface SettingsData {
  settingId: string
  value: string
}

export default class SettingsRepository {
  static async getSettings(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        SELECT \`settingId\`, \`value\`
        FROM \`settings\`
        WHERE \`profileId\` = ${connection.escape(profileId)}
      `
      const [settings] = await connection.query<RowDataPacket[]>(sql)

      return settings as SettingsData[]
    } catch (error) {
      throw error
    }
  }

  static async setSettings(profileId: number, items: SettingsData[]) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sqlData = items.map((item) => [profileId, item.settingId, item.value])
      const sql = `
        INSERT INTO \`settings\`
        VALUES ${connection.escape(sqlData)} AS \`vals\`
        ON DUPLICATE KEY UPDATE \`value\` = \`vals\`.\`value\`;
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }

  static async removeSettings(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        DELETE FROM \`settings\`
        WHERE \`profileId\` = ${connection.escape(profileId)};
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }
}
