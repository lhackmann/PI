import Paciente from "../models/Paciente.js"

class PacienteController {
    static async list(req,res){
        const pacientes = await Paciente.findAll()
        res.json(pacientes)
    }

static async createPaciente(req, res) {
        const {prontuario, nome,dataNascimento,cpf,telefone} = req.body
        if(!prontuario || !nome || !dataNascimento || !cpf || !telefone ) {
            res.status(400).json({ error: 'Prontuario, nome, dataNascimento, cpf, telefone são obrigatórios' })
            return
        }

        const createdPaciente = await Paciente.create({prontuario, nome,dataNascimento,cpf,telefone})
        res.status(201).json(createdPaciente)
    }

static async getPacienteById(req, res) {
    const id = parseInt(req.params.id)
    const paciente = await Paciente.findByPk(id)

    if(!paciente) {
        res.status(404).json({ error: 'Paciente não encontrado' })
        return
    }
    res.json(paciente)
}

static async destroyPaciente(req, res) {
    const id = parseInt(req.params.id)
    const paciente = await Paciente.findByPk(id)
    if(!paciente) {
        res.status(404).json({ error: 'Paciente não encontrado' })
        return
    }
    await Paciente.destroy({where: {id: paciente.id}})
    res.json({ message: 'Paciente removido com sucesso' })
}

static async updatePaciente(req, res) {
    const id = parseInt(req.params.id)
    const paciente = await Paciente.findByPk(id)
    if(!paciente) {
        res.status(404).json({ error: 'Paciente não encontrado' })
        return
    }

    const { prontuario, nome,dataNascimento,cpf,telefone } = req.body
    if(!prontuario || !nome || !dataNascimento || !cpf || !telefone ) {
        res.status(400).json({ error: 'Prontuario, nome, dataNascimento, cpf, telefone são obrigatórios' })
        return
    }

   /*paciente.prontuario = prontuario
    paciente.nome = nome
    paciente.dataNascimento = dataNascimento
    paciente.cpf = cpf
    paciente.telefone = telefone*/

    const updatedPaciente = await Paciente.update({prontuario, nome,dataNascimento,cpf,telefone},{where: {id: paciente.id}})
        res.json(updatedPaciente)
}
}

export default PacienteController