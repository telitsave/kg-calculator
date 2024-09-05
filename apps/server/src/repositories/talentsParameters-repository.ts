import mysqlAdapter from '../adapters/mysql-adapter'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'

export interface TalentsData {
  element: string
  rank: number
  small: number
  big: number
}

export default class TalentsParametersRepository {
  static async getTalents(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `SELECT * FROM \`talents_parameters\` WHERE \`profileId\` = ?`
      const [items] = await connection.query<RowDataPacket[]>(sql, [profileId])

      return items as TalentsData[]
    } catch (error) {
      throw error
    }
  }

  static async setTalents(profileId: number, items: TalentsData[]) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sqlData = items.map((item) => [profileId, item.element, item.rank, item.small, item.big])
      const sql = `
        INSERT INTO \`talents_parameters\`
        VALUES ${connection.escape(sqlData)} AS \`vals\`
        ON DUPLICATE KEY UPDATE
            \`small\` = \`vals\`.\`small\`,
            \`big\` = \`vals\`.\`big\`;
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }

  static async removeTalents(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        DELETE FROM \`talents_parameters\`
        WHERE \`profileId\` = ${connection.escape(profileId)};
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }
}
