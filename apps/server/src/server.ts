import calculatorRouter from './routes/calculatorRouter'
import heroesRouter from './routes/heroesRouter'
import serverSettingsRouter from './routes/serverSettingsRouter'
import spiritsInvasionRouter from './routes/spiritsInvasionRouter'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'


dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT

app.use('/calculator', calculatorRouter)
app.use('/spiritsInvasion', spiritsInvasionRouter)
app.use('/heroes', heroesRouter)
app.use('/serverSettings', serverSettingsRouter)

app.listen(port, () => console.log(`Running on port ${port}`))
