import express from 'express'
import AgendaController from '../controllers/AgendaController.js'

const AgendaRouter = express.Router()

AgendaRouter.get('/',AgendaController.list)
AgendaRouter.get('/:id',AgendaController.find)
//PacienteRouter.delete()

export default AgendaRouter