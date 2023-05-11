export class Agenda {
    constructor(paciente, profissional,data,hora){
        this.paciente = paciente
        this.profissional = profissional
        this.data = data
        this.hora = hora
        
    }
}

export const getAll = () => {
    return dbAgenda
}

export const dbAgenda = [
    new Agenda("Ana","Larissa","05/07/2023","08:30"),
    ]