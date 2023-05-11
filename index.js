import express from 'express'
import ProfissionalRouter from './routes/ProfissionalRoutes.js'
import PacienteRouter from './routes/PacienteRoutes.js'
import AgendaRouter from './routes/AgendaRoutes.js'

const app = express()
app.use(express.json())

// npm i --save-dev nodemon
// "dev": "npx nodemon index.js"

app.use('/profissional',ProfissionalRouter)
app.use('/pacientes',PacienteRouter)
app.use('/agenda',AgendaRouter)

app.listen(3000, () => {console.log('API Rodando na porta 3000!')})

