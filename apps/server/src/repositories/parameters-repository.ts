import mysqlAdapter from '../adapters/mysql-adapter'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'

export interface ParametersData {
  parameterId: string
  value: number
}

export default class ParametersRepository {
  static async getParameters(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        SELECT \`parameterId\`, \`value\`
        FROM \`profile_parameters\`
        WHERE \`profileId\` = ${connection.escape(profileId)}
      `
      const [parameters] = await connection.query<RowDataPacket[]>(sql)

      return parameters as ParametersData[]
    } catch (error) {
      throw error
    }
  }

  static async setParameters(profileId: number, items: ParametersData[]) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sqlData = items.map((item) => [profileId, item.parameterId, item.value])
      const sql = `
        INSERT INTO \`profile_parameters\`
        VALUES ${connection.escape(sqlData)} AS \`vals\`
        ON DUPLICATE KEY UPDATE \`value\` = \`vals\`.\`value\`;
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }

  static async removeParameters(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        DELETE FROM \`profile_parameters\`
        WHERE \`profileId\` = ${connection.escape(profileId)};
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }
}
