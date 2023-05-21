import express from 'express'
import ProfissionalController from '../controllers/ProfissionalController.js'

const ProfissionalRouter = express.Router();

ProfissionalRouter.get('/',ProfissionalController.list)
ProfissionalRouter.post('/',ProfissionalController.createProfissional)
ProfissionalRouter.get('/:id',ProfissionalController.getProfissionalById)
ProfissionalRouter.delete('/:id',ProfissionalController.destroyProfissional)
ProfissionalRouter.put('/:id',ProfissionalController.updateProfissional)

export default ProfissionalRouter