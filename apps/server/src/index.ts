import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import calculatorRouter from './routes/calculatorRouter'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT

app.use('/calculator', calculatorRouter)

app.listen(port, () => console.log(`Running on port ${port}`))
