import  Medicacao from "../models/Medicacao.js"

class MedicacaoController {
    static async list(req,res){
        const medicacao = await Medicacao.findAll()
        res.json(medicacao)
    }

    static async getMedicacaoById(req, res){
        const id = parseInt(req.params.id)
        const medicacao = await Medicacao.findByPk(id)

        if(!medicacao){
            res.status(404).json({ error: 'Medicacao não encontrado!'})
            return
        }
        res.json(medicacao)
    }

    static async destroyMedicacao(req, res) {
        const id = parseInt(req.params.id)
        const medicacao = await findByPk(id)
        if(!medicacao) {
            res.status(404).json({error: 'Medicacao não encontrado!'})
            return
        }
        await Medicacao.destroy({where: {id: medicacao.id}})
        res.json({ message: 'Medicacao removido com sucesso!'})
    }

    static async createMedicacao(req,res){
        const { idMedicacao, nomeMedicacao, intensidade,quantidade, intervaloTempo, tempoUtilizacao, paciente, medico } = req.body
        if(!idMedicacao || !nomeMedicacao || !intensidade || !quantidade || !intervaloTempo || !tempoUtilizacao || !paciente || !medico) {
            res.status(400).json({ error: 'Todos os campos são obrigatórios!!!'})
            return
        }
        const createdMedicacao = await Medicacao.create({idMedicacao, nomeMedicacao, intensidade, quantidade, intervaloTempo, tempoUtilizacao, paciente, medico})
        res.status(201).json(createdMedicacao)

    }

    static async updateMedicacao(req, res) {
        const id = parseInt(req.params.id)
        const medicacao = await Medicacao.findByPk(id)
        if(!medicacao) {
            req.status(404).json({ error: 'Medicacao não encontrado!'})
            return
        }

        const { idMedicacao, nomeMedicacao, intensidade,quantidade, intervaloTempo, tempoUtilizacao, paciente, medico } = req.body
        if(!idMedicacao || !nomeMedicacao || !intensidade || !quantidade || !intervaloTempo || !tempoUtilizacao || !paciente || !medico) {
            res.status(400).json({ error: 'Todos os campos são obrigatórios!!!'})
            return
    }
    const updatedMedicacao = await Medicacao.update({idMedicacao,nomeMedicacao,intensidade,quantidade,intervaloTempo,tempoUtilizacao, paciente, medico},{where: {id: medicacao.id}})
    res.json(updatedMedicacao)
   }
}

export default MedicacaoController

/*class MedicacaoController {
    static list(req,res){
        res.json(getAll())
    }

    static createMedicacao(req,res) {
        const { idMedicacao, nomeMedicacao, intensidade,quantidade, intervaloTempo,
             tempoUtilizacao, paciente, medico} = req.body

        if(!idMedicacao || !nomeMedicacao || !intensidade || !quantidade || !intervaloTempo
            || !tempoUtilizacao || !paciente || !medico){
            res.status(400).json({error: 'todos os campos são obrigatórios'})
            return 
            }
        
        const medicacao = new Medicacao(idMedicacao,nomeMedicacao,intensidade,quantidade, 
            intervaloTempo, tempoUtilizacao,  paciente, medico)
        create(medicacao)
        res.json(medicacao)
    }
    
    static getMedicacaoById(req, res) {
        const idMedicacao = parseInt(req.params.idMedicacao)
        const medicacao = findMedicacaoByPk(idMedicacao)
        if(!medicacao){
            res.status(404).json({error: 'Medicação não encontrada'})
            return
        }
        res.json(medicacao)
    }

    static destroyMedicaco(req,res){
        const idMedicacao = parseInt(req.params.idMedicacao)
        const medicacao = findMedicacaoByPk(idMedicacao)
        if(!medicacao){
            res.status(404).json({error: 'Medicação não encontrada'})
            return
        }
        destroy(idMedicacao)
        res.json({messege: 'Medicação removida com sucesso'})
    }

    static updateMedicacao(req, res){
        const id = parseInt(req.params.id)
        const medicacao = findMedicacaoByPk(id)
        if(!medicacao){
            res.status(404).json({error:'Medicação não encontrada'})
            return
        }
        const { idMedicacao, nomeMedicacao, intensidade,quantidade, intervaloTempo,
            tempoUtilizacao, paciente, medico} = req.body
         if(!idMedicacao || !nomeMedicacao || !intensidade || !quantidade || !intervaloTempo
            || !tempoUtilizacao || !paciente || !medico){
            res.status(400).json({error: 'todos os campos são obrigatórios'})
            return 
        }
        medicacao.nomeMedicacao = nomeMedicacao
        medicacao.intensidade = intensidade
        medicacao.quantidade = quantidade
        medicacao.intervaloTempo = intervaloTempo
        medicacao.tempoUtilização = tempoUtilizacao
        medicacao.paciente = paciente
        medicacao.medico = medico

        update(id, medicacao)
        res.json(medicacao)
    }

}*/