import MysqlAdapter from './adapters/mysql-adapter'
import errorMiddleware from './middlewares/error-middleware'
import router from './routes'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'


dotenv.config()

const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('', router)
app.use(errorMiddleware)

MysqlAdapter.init()

app.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))
