import express from 'express'
import PacienteController from '../controllers/PacienteController.js'

const PacienteRouter = express.Router()

Pacienterouter.get('/', PacienteController.getPaciente)
Pacienterouter.post('/', PacienteController.createPaciente)
Pacienterouter.get('/:id', PacienteController.getPacienteById)
Pacienterouter.delete('/:id', PacienteController.destroyPaciente)
Pacienterouter.put('/:id', PacienteController.updatePaciente)

export default PacienteRouter