export class Medicacao {
    constructor(idmedicacao, nomemedicacao, intensidade, quantidade, intervalotempo, tempoutilização, paciente, medico){
        this.idmedicacao = idmedicacao
        this.nomemedicacao = nomemedicacao
        this.intensidade = intensidade
        this.quantidade = quantidade
        this.intervalotempo = intervalotempo
        this.tempoutilização = tempoutilização
        this.paciente = paciente
        this.medico = medico
    }
}

export const getAll = () => {
    return dbMedicacao
}

export const dbMedicacao = [
    new Medicacao(1,"Neosaldina","1g","1 comprimido", "12hrs", "7 dias","Leonardo", "Lucas"),
    new Medicacao(2,"Paracetamol","750mg", "1 comprimido","08hrs","4 dias","Eliane","Leandro")
]