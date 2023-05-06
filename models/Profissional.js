export class Profissional {
    constructor(id, nome, CPF, RG, profissao, CCR, assinatura){
        this.id = id
        this.nome = nome
        this.CPF = CPF
        this.RG = RG
        this.profissao = profissao
        this.CCR = CCR
        this.assinatura = assinatura
    }
}

export const getAll = () => {
    return dbProfisional
}

export const dbProfisional = [
    new Profissional(1,"Larissa","123.456.789","12345678","Terapeuta Ocupacional","123456"),
    
]