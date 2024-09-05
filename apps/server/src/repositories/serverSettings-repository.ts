import mysqlAdapter from '../adapters/mysql-adapter'
import type { CustomServerSettingsData } from 'kg-calculator-typings'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'


export interface ServerSettingsData {
  settingId: keyof CustomServerSettingsData
  value: string | null
}

export default class ServerSettingsRepository {
  static async getServerSettings(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        SELECT \`settingId\`, \`value\`
        FROM \`server_settings\`
        WHERE \`profileId\` = ${connection.escape(profileId)}
      `
      const [settings] = await connection.query<RowDataPacket[]>(sql)

      return settings as ServerSettingsData[]
    } catch (error) {
      throw error
    }
  }

  static async setServerSettings(profileId: number, items: ServerSettingsData[]) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sqlData = items.map((item) => [profileId, item.settingId, item.value])
      const sql = `
        INSERT INTO \`server_settings\`
        VALUES ${connection.escape(sqlData)} AS \`vals\`
        ON DUPLICATE KEY UPDATE \`value\` = \`vals\`.\`value\`;
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }

  static async removeServerSettings(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        DELETE FROM \`server_settings\`
        WHERE \`profileId\` = ${connection.escape(profileId)};
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }
}
