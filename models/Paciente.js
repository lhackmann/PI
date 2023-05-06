export class Paciente {
    constructor(prontuario, nome,dataNascimento,cpf,telefone){
        this.prontuario = prontuario
        this.nome = nome
        this.dataNascimento = dataNascimento
        this.cpf = cpf
        this.telefone = telefone
    }
}

export const getAll = () => {
    return dbPaciente
}

export const dbPaciente = [
    new Paciente(1,"Felipe","01/01/1990","12345678912","12345678"),
    new Paciente(2,"Laura","02/02/1990","21987654321","987654321")
]