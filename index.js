import express from 'express'
import ProfissionalRouter from './routes/ProfissionalRoutes.js'
import PacienteRouter from './routes/PacienteRoutes.js'
import AgendaRouter from './routes/AgendaRoutes.js'
import MedicacaoRouter from './routes/MedicacaoRoutes.js'
import ProntuarioRouter from './routes/ProntuarioRoutes.js'
import db from '.db.js'

const app = express()
app.use(express.json())

db.sync(() => console.log('Banco de dados preparado'))

// npm i --save-dev nodemon
// "dev": "npx nodemon index.js"

app.use('/profissional',ProfissionalRouter)
app.use('/pacientes',PacienteRouter)
app.use('/agenda',AgendaRouter)
app.use('/medicacao',MedicacaoRouter)
app.use('/prontuario',ProntuarioRouter)

const port = process.env.PORT || 3000
app.listen(3000, () => {console.log('API Rodando na porta 3000!')})

