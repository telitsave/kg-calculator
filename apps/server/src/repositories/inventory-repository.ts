import mysqlAdapter from '../adapters/mysql-adapter'
import type { ResourceType } from 'kg-calculator-typings'
import type { ResultSetHeader, RowDataPacket } from 'mysql2'


export default class InventoryRepository {
  static async getInventory(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const [items] = await connection.query<RowDataPacket[]>(
        'SELECT `itemId`, `count` FROM `inventory` WHERE `profileId` = ?',
        [profileId],
      )

      return items as { itemId: ResourceType; count: number }[]
    } catch (error) {
      throw error
    }
  }

  static async addItems(profileId: number, items: { itemId: ResourceType; count: number }[]) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sqlData = items.map((item) => [profileId, item.itemId, item.count])
      const sql = `
        INSERT INTO \`inventory\`
        VALUES ${connection.escape(sqlData)} AS \`vals\`
        ON DUPLICATE KEY UPDATE \`count\` = \`vals\`.\`count\`;
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }

  static async removeItems(profileId: number) {
    try {
      const connection = await mysqlAdapter.getConnection()
      const sql = `
        DELETE FROM \`inventory\`
        WHERE \`profileId\` = ${connection.escape(profileId)};
      `
      await connection.execute<ResultSetHeader>(sql)
    } catch (err) {
      throw err
    }
  }
}
