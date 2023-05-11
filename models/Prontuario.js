export class Prontuario {
    constructor(Id_Prontuario, nome_pac){
        this.Id_Prontuario = Id_Prontuario
        this.nome_pac = nome_pac       
    }
}

export const getAll = () => {
    return dbProntuario
}

export const dbProntuario = [
    new Prontuario(1,"Ana"),
    ]