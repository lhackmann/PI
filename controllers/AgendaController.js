import { Agenda, findAll, create, findByPk, destroy, update } from "../models/Agenda.js"
class AgendaController {
    static getAgenda(req,res){
        res.json(findAll())
    }

    static createAgenda(req,res){
        const { paciente, profissional, data, hora } = req.body
        if(!paciente || !profissional || !data || !hora) {
            res.status(400).json({ error: 'Paciente, Profissional, data e hora são obrigatórios!!!'})
            return
        }
       
        const agenda = new Agenda(paciente, profissional, data, hora)
        create(agenda)
        res.json(agenda)
    }

    static getAgendaById(req, res){
        const id = parseInt(req.params.id)
        const aagenda = findbyPk(id)
        if(!agenda){
            res.status(404).json({ error: 'Agendamento não encontrado!'})
            return
        }
        res.json(agenda)
    }

    static destroyAgenda(req, res) {
        const id = parseInt(req.params.id)
        const agenda = findByPk(id)
        if(!agenda) {
            res.status(404).json({error: 'Agendamento não encontrado!'})
            return
        }
        destroy(id)
        res.json({ message: 'Agendamento removido com sucesso!'})
    }

    static updateAgenda(req, res) {
        const id = parseInt(req.params.id)
        const agenda = findbyPk(id)
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
    
    update(id, agenda)
    res.json(agenda)
}
}

export default AgendaController