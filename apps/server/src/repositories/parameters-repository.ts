import mysqlAdapter from '../adapters/mysql-adapter'
import Parameters from '../model/parameters/Parameters'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'


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

      return Parameters.transformDataFromDB(parameters as { parameterId: string; value: string }[])
    } catch (error) {
      throw error
    }
  }

  static async setParameters(profileId: number, items: { parameterId: string; value: string }[]) {
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
