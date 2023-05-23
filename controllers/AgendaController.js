import Agenda from "../models/Agenda.js"

class AgendaController {
    static async list(req,res){
        const agendas = await Agenda.findAll()
        res.json(agendas)
    }

    static async createAgenda(req,res){
        const { paciente, profissional, data, hora } = req.body
        if(!paciente || !profissional || !data || !hora) {
            res.status(400).json({ error: 'Paciente, Profissional, data e hora são obrigatórios!!!'})
            return
        }
       
        const createdAgenda = await Agenda.create({paciente, profissional, data, hora}) //req.body
        res.status(201).json(createdAgenda)
    }

    static async getAgendaById(req, res){
        const id = parseInt(req.params.id)
        const agenda = await Agenda.findbyPk(id)

        if(!agenda){
            res.status(404).json({ error: 'Agendamento não encontrado!'})
            return
        }
        res.json(agenda)
    }

    static async destroyAgenda(req, res) {
        const id = parseInt(req.params.id)
        const agenda = await Agenda.findByPk(id)
        if(!agenda) {
            res.status(404).json({error: 'Agendamento não encontrado!'})
            return
        }
        await Agenda.destroy({where: {id: contato.id}})
        res.json({ message: 'Agendamento removido com sucesso!'})
    }

    static async updateAgenda(req, res) {
        const id = parseInt(req.params.id)
        const agenda = await Agenda.findbyPk(id)
        if(!agenda) {
            req.status(404).json({ error: 'Agendamento não encontrado!'})
            return
        }

        const { paciente, profissional, data, hora } = req.body
        if(!paciente || !profissional || !data || !hora) {
            res.status(400).json({ error: 'Paciente, profissional, data e hora são obrigatórios!!!'})
            return
    }

    profissional.paciente = paciente
    profissional.profissional = profissional
    profissional.data = data
    profissional.hora = hora
    
    const updatedAgenda = await Agenda.update({paciente, profissional, data, hora},{where: {id: agenda.id}})
    res.json(agenda)
}
}

export default AgendaController