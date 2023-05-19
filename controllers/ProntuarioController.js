import { Prontuario, findAll, create, findByPk, destroy, update } from "../models/Prontuario.js"

class ProntuarioController {
    static getProntuario(req,res){
        res.json(findAll())
    }

     static createProntuario(req,res){
        const { paciente } = req.body
        if(!paciente) {
            res.status(400).json({ error: 'Paciente é obrigatório!!!'})
            return
        }
       
        const prontuario = new Prontuario(paciente)
        create(prontuario)
        res.json(prontuario)
    }

    static getProntuarioById(req, res){
        const id = parseInt(req.params.id)
        const prontuario = findbyPk(id)
        if(!prontuario){
            res.status(404).json({ error: 'Prontuário não encontrado!'})
            return
        }
        res.json(prontuario)
    }

    static destroyProntuario(req, res) {
        const id = parseInt(req.params.id)
        const prontuario = findByPk(id)
        if(!prontuario) {
            res.status(404).json({error: 'Prontuário não encontrado!'})
            return
        }
        destroy(id)
        res.json({ message: 'Prontuário removido com sucesso!'})
    }

    static updateProntuario(req, res) {
        const id = parseInt(req.params.id)
        const prontuario = findbyPk(id)
        if(!prontuario) {
            req.status(404).json({ error: 'Prontuário não encontrado!'})
            return
        }

        const { paciente } = req.body
        if(!paciente) {
            res.status(400).json({ error: 'Paciente é obrigatório!!!'})
            return
    }

    profissional.paciente = paciente
        
    update(id, agenda)
    res.json(agenda)
}
}

export default ProntuarioController