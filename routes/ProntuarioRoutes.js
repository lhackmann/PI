import express from 'express'
import ProntuarioController from '../controllers/ProntuarioController.js'

const ProntuarioRouter = express.Router()

ProntuarioRouter.get('/',ProntuarioController.getProntuario)
ProntuarioRouter.post('/',ProntuarioController.createProntuario)
ProntuarioRouter.get('/:id',ProntuarioController.getProntuarioById)
ProntuarioRouter.delete('/:id',ProntuarioController.destroyProntuario)
ProntuarioRouter.put('/:id',ProntuarioController.updateProntuario)

export default ProntuarioRouter