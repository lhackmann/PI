import express from 'express'
import ContatoController from '../controllers/ProfissionalController.js'

const ProfissionalRouter = express.Router()

ProfissionalRouter.get('/',ProfissionalController.list)
ProfissionalRouter.get('/:id',ProfissionalController.find)

export default ProfissionalRouter