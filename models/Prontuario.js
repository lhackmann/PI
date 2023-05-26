import { Sequelize } from "sequelize"
import db from "../db.js"

const Prontuario = db.define('prontuario',{
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

export default Prontuario




/* export class Prontuario {
    constructor(Id_Prontuario, nome_pac){
        this.Id_Prontuario = Id_Prontuario
        this.nome_pac = nome_pac       
    }
}
export const update = (id, Prontuario) => {
    const prontuarioToUpdate = findByPk(id)
    if(!prontuarioToUpdate) {
    return false
    }
    
    const index = dbProntuario.indexOf(prontuarioToUpdate)
    dbProntuario[index] = prontuario
    return true

    
}

export const destroy = (id) => {
    const prontuario = findByPk(id)
    if(!prontuario) {
        return false
    }
    const index = dbProntuario.indexOf(prontuario)
    dbProntuario.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbProntuario.find(prontuario => prontuario.id === id)
}

export const create = (prontuario) => {
    prontuario.id = dbProntuario.length + 1
    dbProntuario.push(prontuario)
}

export const findAll = () => {
    return dbProntuario
}

export const dbProntuario = [
    new Prontuario("01","Ana"),] */