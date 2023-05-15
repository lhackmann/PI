import { Contato, findAll, create, findByPk, destroy, update } from "../models/Paciente.js"

class pacienteController {
    static getPaciente(req, res) {
        res.json(findAll())
    }

static createPaciente(req, res) {
        const {prontuario, nome,dataNascimento,cpf,telefone} = req.body
        if(!prontuario || !nome || !dataNascimento || !cpf || !telefone ) {
            res.status(400).json({ error: 'Prontuario, nome, dataNascimento, cpf, telefone são obrigatórios' })
            return
        }

        const paciente = new Paciente(prontuario, nome,dataNascimento,cpf,telefone)
        create(paciente)
        res.json(paciente)
    }

static getPacienteById(req, res) {
    const id = parseInt(req.params.id)
    const paciente = findByPk(id)
    if(!paciente) {
        res.status(404).json({ error: 'Paciente não encontrado' })
        return
    }
    res.json(paciente)
}

static destroyPaciente(req, res) {
    const id = parseInt(req.params.id)
    const paciente = findByPk(id)
    if(!paciente) {
        res.status(404).json({ error: 'Paciente não encontrado' })
        return
    }
    destroy(id)
    res.json({ message: 'Paciente removido com sucesso' })
}

static updatePaciente(req, res) {
    const id = parseInt(req.params.id)
    const paciente = findByPk(id)
    if(!paciente) {
        res.status(404).json({ error: 'Paciente não encontrado' })
        return
    }

    const { prontuario, nome,dataNascimento,cpf,telefone } = req.body
    if(!prontuario || !nome || !dataNascimento || !cpf || !telefone ) {
        res.status(400).json({ error: 'Prontuario, nome, dataNascimento, cpf, telefone são obrigatórios' })
        return
    }

    paciente.prontuario = prontuario
    paciente.nome = nome
    paciente.dataNascimento = dataNascimento
    paciente.cpf = cpf
    paciente.telefone = telefone

    update(id, paciente)
    res.json(paciente)
}
}

export default PacienteController