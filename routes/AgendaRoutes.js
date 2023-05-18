import express from 'express'
import AgendaController from '../controllers/AgendaController.js'

const AgendaRouter = express.Router();
AgendaRouter.get('/',AgendaController.getAgenda)
AgendaRouter.post('/',AgendaController.createAgenda)
AgendaRouter.get('/:id',AgendaController.getAgendaById)
AgendaRouter.delete('/:id',AgendaController.destroyAgenda)
AgendaRouter.put('/:id',AgendaController.updateAgenda)

export default AgendaRouter