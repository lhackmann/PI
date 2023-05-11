import { getAll } from "../models/Agenda.js"

class AgendaController {
    static list(req,res){
        res.json(getAll())
    }

    static find(req,res){
        res.json(req.param)
    }
}

export default AgendaController