export class Agenda {
    constructor(paciente, profissional,data,hora){
        this.paciente = paciente
        this.profissional = profissional
        this.data = data
        this.hora = hora
        
    }
}
export const update = (id, agenda) => {
    const agendaToUpdate = findByPk(id)
    if(!agendaToUpdate) {
    return false
    }

    const index = dbAgenda.indexOf(agendaToUpdate)
    dbAgenda[index] = agenda
    return true

}

export const destroy = (id) => {
    const agenda = findByPk(id)
    if(!agenda) {
        return false
    }
    const index = dbAgenda.indexOf(agenda)
    dbAgenda.splice(index, 1)
    return true
}

export const findByPk = (id) => {
    return dbAgenda.find(agenda => agenda.id === id)
}

export const create = (agenda) => {
    agenda.id = dbAgenda.length + 1
    dbAgenda.push(agenda)
}

export const findAll = () => {
    return dbAgenda
}

export const dbAgenda = [
    new Agenda("Ana","Larissa","05/07/2023","08:30"),
    ]