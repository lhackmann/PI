import sequelize, {Sequelize} from "sequelize"
import db from "../db.js"

const Medicacao = db.define('medicacao',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nomeMedicacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    intensidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    intervaloTempo: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    tempoUtilização: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    paciente: {
        type: Sequelize.STRING,
        allowNull: false
    },
    medico: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Medicacao

/*export class Medicacao {
    constructor(idMedicacao, nomeMedicacao, intensidade, quantidade, intervaloTempo, tempoUtilização, paciente, medico){
        this.idMedicacao = idMedicacao
        this.nomeMedicacao = nomeMedicacao
        this.intensidade = intensidade
        this.quantidade = quantidade
        this.intervaloTempo = intervaloTempo
        this.tempoUtilização = tempoUtilização
        this.paciente = paciente
        this.medico = medico
    }
}

export const getAll = () => {
    return dbMedicacao
}

export const create = (Medicacao) => {
    dbMedicacao.push(Medicacao)
}

export const findMedicacaoByPk = (idMedicacao) =>{
    return dbMedicacao.find(Medicacao => Medicacao.idMedicacao === idMedicacao)
}

export const destroy = (idMedicacao) =>{
    const medicacao = findMedicacaoByPk(idMedicacao)
    if(!medicacao){
        return false
    }
    const index = dbMedicacao.indexOf(medicacao)
    dbMedicacao.splice(index,1)
    return true
}

export const update = (idMedicacao, medicacao) =>{
    const medicacaoToUpdate = findMedicacaoByPk(idMedicacao)
    if(!medicacaoToUpdate) {
        return false
    }
    const index = dbMedicacao.indexOf(medicacaoToUpdate)
    dbMedicacao[index]= medicacao
    return true
}


export const dbMedicacao = [
    new Medicacao(1,"Neosaldina","1g","1 comprimido", "12hrs", "7 dias","Leonardo", "Lucas"),
    new Medicacao(2,"Paracetamol","750mg", "1 comprimido","08hrs","4 dias","Eliane","Leandro")
]*/