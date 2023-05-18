export class Medicacao {
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


export const dbMedicacao = [
    new Medicacao(1,"Neosaldina","1g","1 comprimido", "12hrs", "7 dias","Leonardo", "Lucas"),
    new Medicacao(2,"Paracetamol","750mg", "1 comprimido","08hrs","4 dias","Eliane","Leandro")
]