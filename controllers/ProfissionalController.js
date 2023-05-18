import { Profissional, findAll, create, findbyPk, destroy, update } from "../models/Profissional.js"
class ProfissionalController {
    static getProfissional(req,res){
        res.json(findAll())
    }

    static createProfissional(req,res){
        const { nome, CPF, RG, profissao, CCR, assinatura } = req.body
        if(!nome || !CPF || !RG || !profissao || !CCR || !assinatura) {
            res.status(400).json({ error: 'Nome, CPF, RG, profissão, CCR e assinatura são obrigatórios!!!'})
            return
        }
       
        const profissional = new Profissional(nome, CPF, RG, profissao, CCR, assinatura)
        create(profissional)
        res.json(profissional)
    }

    static getProfissionalById(req, res){
        const id = parseInt(req.params.id)
        const profissional = findbyPk(id)
        if(!profissional){
            res.status(404).json({ error: 'Profissional não encontrado!'})
            return
        }
        res.json(profissional)
    }

    static destroyProfissional(req, res) {
        const id = parseInt(req.params.id)
        const profissional = findByPk(id)
        if(!profissional) {
            res.status(404).json({error: 'Profissional não encontrado!'})
            return
        }
        destroy(id)
        res.json({ message: 'Profissional removido com sucesso!'})
    }

    static updateProfissional(req, res) {
        const id = parseInt(req.params.id)
        const profissional = findbyPk(id)
        if(!profissional) {
            req.status(404).json({ error: 'Profissional não encontrado!'})
            return
        }

        const { nome, CPF, RG, profissao, CCR, assinatura } = req.body
        if(!nome || !CPF || !RG || !profissao || !CCR || !assinatura) {
            res.status(400).json({ error: 'Nome, CPF, RG, profissão, CCR e assinatura são obrigatórios!!!'})
            return
    }

    profissional.nome = nome
    profissional.CPF = CPF
    profissional.RG = RG
    profissional.profissao = profissao
    profissional.CCR = CCR
    profissional.assinatura = assinatura

    update(id, profissional)
    res.json(profissional)
}
}
export default ProfissionalController