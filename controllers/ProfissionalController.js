import Profissional from "../models/Profissional.js"

class ProfissionalController {
    static async list(req,res){
        const profissional = await Profissional.findAll()
        res.json(profissional)
    }

    static async getProfissionalById(req, res){
        const id = parseInt(req.params.id)
        const profissional = await Profissional.findByPk(id)

        if(!profissional){
            res.status(404).json({ error: 'Profissional não encontrado!'})
            return
        }
        res.json(profissional)
    }

    static async destroyProfissional(req, res) {
        const id = parseInt(req.params.id)
        const profissional = await findByPk(id)
        if(!profissional) {
            res.status(404).json({error: 'Profissional não encontrado!'})
            return
        }
        await Profissional.destroy({where: {id: profissional.id}})
        res.json({ message: 'Profissional removido com sucesso!'})
    }

    static async createProfissional(req,res){
        const {id, nome, cpf, rg, profissao, ccr, assinatura } = req.body
        if(!id, !nome || !cpf || !rg || !profissao || !ccr || !assinatura) {
            res.status(400).json({ error: 'Nome, cpf, rg, profissão, ccr e assinatura são obrigatórios!!!'})
            return
        }
        const createdProfissional = await Profissional.create({id, nome,cpf,rg,profissao,ccr,assinatura})
        res.status(201).json(createdProfissional)

    }

    static async updateProfissional(req, res) {
        const id = parseInt(req.params.id)
        const profissional = await Profissional.findByPk(id)
        if(!profissional) {
            req.status(404).json({ error: 'Profissional não encontrado!'})
            return
        }

        const {nome, cpf, rg, profissao, ccr, assinatura } = req.body
        if(!nome || !cpf || !rg || !profissao || !ccr || !assinatura) {
            res.status(400).json({ error: 'Nome, cpf, rg, profissão, ccr e assinatura são obrigatórios!!!'})
            return
    }
    const updatedProfissional = await Profissional.update({id, nome,cpf,rg,profissao,ccr,assinatura},{where: {id: profissional.id}})
    res.json(updatedProfissional)
   }
}

export default ProfissionalController