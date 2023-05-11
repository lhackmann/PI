import express from 'express'
import MedicacaoController from '../controllers/MedicacaoController.js'

const MedicacaoRouter = express.Router()

MedicacaoRouter.get('/',MedicacaoController.list)
MedicacaoRouter.get('/:id',MedicacaoController.find)
//MedicacaoRouter.delete()

export default MedicacaoRouter