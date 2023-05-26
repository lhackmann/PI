import Prontuario from "../models/Prontuario.js"

class ProntuarioController {
    static async list(req,res){
        const prontuario
 = await Prontuario.findAll()
        res.json(prontuario
    )
    }

static async createProntuario(req, res) {
        const {id_Prontuario, nome_pac} = req.body
        if(!id_Prontuario || !nome_pac) {
            res.status(400).json({ error: 'Prontuário, nome' })
            return
        }

        const createdProntuario = await Prontuario.create({id_Prontuario, nome_pac})
        res.status(201).json(createdProntuario)
    }

static async getProntuarioById(req, res) {
    const id_Prontuario = parseInt(req.params.id)
    const nome_pac = await Prontuario.findByPk(id)

    if(!id_Prontuario) {
        res.status(404).json({ error: 'Prontuario não encontrado' })
        return
    }
    res.json(nome_pac)
}

static async destroyProntuario(req, res) {
    const id_Prontuario = parseInt(req.params.id)
    const nome_pac = await Prontuario.findByPk(id)
    if(!id_Prontuario) {
        res.status(404).json({ error: 'Prontuario não encontrado' })
        return
    }
    await Prontuario.destroy({where: {id: prontuario.id}})
    res.json({ message: 'Prontuario removido com sucesso' })
}

static async updateProntuario(req, res) {
    const id_Prontuario = parseInt(req.params.id)
    const nome_pac = await Prontuario.findByPk(id)
    if(!nome_pac) {
        res.status(404).json({ error: 'Prontuario não encontrado' })
        return
    }

    const { prontuario, nome,dataNascimento,cpf,telefone } = req.body
    if(!id_Prontuario || !nome_pac) {
        res.status(400).json({ error: 'Prontuario, nome são obrigatórios' })
        return
    }

    const updatedProntuario = await Prontuario.update({id_prontuario, nome_pac,e},{where: {id: prontuario.id}})
        res.json(updatedProntuario)
}
}

export default ProntuarioController