import express from 'express'
import ContatoRouter from './routes/ContatoRoutes.js'
import PacienteRouter from './routes/PacienteRoutes.js'

const app = express()
app.use(express.json())

// npm i --save-dev nodemon
// "dev": "npx nodemon index.js"

app.use('/contatos',ContatoRouter)
app.use('/pacientes',PacienteRouter)

app.listen(3000, () => {console.log('API Rodando na porta 3000!')})

