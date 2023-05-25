import { Sequelize } from "sequelize"
import db from "../db.js"

const Paciente = db.define('paciente',{
    prontuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataNascimento: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cpf: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Paciente

/*export class Paciente {
    constructor(prontuario, nome,dataNascimento,cpf,telefone){
        this.prontuario = prontuario
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.cpf = cpf
        this.telefone = telefone
    }
}

export const update = (id, paciente) => {
    const pacienteToUpdate = findByPk(id)
    if(!pacienteToUpdate) {
        return false
    }

    const index = dbPaciente.indexOf(pacienteToUpdate)
    dbPaciente[index] = paciente
    return true
}

export const destroy = (id) => {
    const paciente = findByPk(id)
    if(!paciente) {
        return false
    }
    const index = dbPaciente.indexOf(paciente)
    dbPaciente.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbPaciente.find(paciente => paciente.id === id)
}

export const create = (paciente) => {
    paciente.id = dbPaciente.length + 1
    dbPaciente.push(paciente)
}

export const findAll = () => {
    return dbPaciente
}

export const dbPaciente = [
    new Paciente(1,"Felipe","01/01/1990","12345678912","12345678"),
    new Paciente(2,"Laura","02/02/1990","21987654321","987654321")
]

export const getAll = () => {
    return dbPaciente
}*/