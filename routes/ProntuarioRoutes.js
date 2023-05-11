import express from 'express'
import ProntuarioController from '../controllers/ProntuarioController.js'

const ProntuarioRouter = express.Router()

ProntuarioRouter.get('/',ProntuarioController.list)
ProntuarioRouter.get('/:id',ProntuarioController.find)
//PacienteRouter.delete()

export default ProntuarioRouter