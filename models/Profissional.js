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

export const update = (id, profissional) => {
    const profissionalToUpdate = findByPk(id)
    if(!profissionalToUpdate) {
    return false
    }

    const index = dbProfisional.indexOf(profissionalToUpdate)
    dbProfisional[index] = profissional
    return true

}

export const destroy = (id) => {
    const profissional = findByPk(id)
    if(!profissional) {
        return false
    }
    const index = dbProfisional.indexOf(profissional)
    dbProfisional.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbProfisional.find(profissional => profissional.id === id)
}

export const create = (profissional) => {
    profissional.id = dbProfisional.length + 1
    dbProfisional.push(profissional)
}

export const findAll = () => {
    return dbProfisional
}

export const dbProfisional = [
    new Profissional(1,"Larissa","123.456.789","12345678","Terapeuta Ocupacional","123456","https://www.abcdt.org.br/wp-content/uploads/Assinatura-Digital-Dr-Helio.jpg"),
    
]