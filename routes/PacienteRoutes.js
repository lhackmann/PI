import express from 'express'
import PacienteController from '../controllers/PacienteController.js'

const PacienteRouter = express.Router()

PacienteRouter.get('/', PacienteController.list)
PacienteRouter.post('/', PacienteController.createPaciente)
PacienteRouter.get('/:id', PacienteController.getPacienteById)
PacienteRouter.delete('/:id', PacienteController.destroyPaciente)
PacienteRouter.put('/:id', PacienteController.updatePaciente)

export default PacienteRouter