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
        const { nome, CPF, RG, profissao, CCR, assinatura } = req.body
        if(!nome || !CPF || !RG || !profissao || !CCR || !assinatura) {
            res.status(400).json({ error: 'Nome, CPF, RG, profissão, CCR e assinatura são obrigatórios!!!'})
            return
        }
        const createdProfissional = await Profissional.create({nome,CPF,RG,profissao,CCR,assinatura})
        res.status(201).json(createdProfissional)

    }

    static async updateProfissional(req, res) {
        const id = parseInt(req.params.id)
        const profissional = await Profissional.findByPk(id)
        if(!profissional) {
            req.status(404).json({ error: 'Profissional não encontrado!'})
            return
        }

        const { nome, CPF, RG, profissao, CCR, assinatura } = req.body
        if(!nome || !CPF || !RG || !profissao || !CCR || !assinatura) {
            res.status(400).json({ error: 'Nome, CPF, RG, profissão, CCR e assinatura são obrigatórios!!!'})
            return
    }
    const updatedProfissional = await Profissional.update({nome,CPF,RG,profissao,CCR,assinatura},{where: {id: profissional.id}})
    res.json(updatedProfissional)
   }
}

export default ProfissionalController