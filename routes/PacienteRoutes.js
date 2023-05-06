import express from 'express'
import PacienteController from '../controllers/PacienteController.js'

const PacienteRouter = express.Router()

PacienteRouter.get('/',PacienteController.list)
PacienteRouter.get('/:id',PacienteController.find)
//PacienteRouter.delete()

export default PacienteRouter