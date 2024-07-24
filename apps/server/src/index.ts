import calculatorRouter from './routes/calculatorRouter'
import spiritsInvasionRouter from './routes/spiritsInvasionRouter'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

import heroesRouter from './routes/heroesRouter'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT

app.use('/calculator', calculatorRouter)
app.use('/spiritsInvasion', spiritsInvasionRouter)
app.use('/heroes', heroesRouter)

app.listen(port, () => console.log(`Running on port ${port}`))
