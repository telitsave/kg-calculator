import mysql from 'mysql2/promise'

class MysqlAdapter {
  private _connection: mysql.Connection | null = null

  async init() {
    if (this._connection) return

    this._connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      user: process.env.MYSQL_LOGIN,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    })
  }

  async getConnection() {
    if (!this._connection) {
      await this.init()
    }

    return this._connection
  }
}

export default new MysqlAdapter()
