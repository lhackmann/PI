import { getAll } from "../models/Paciente.js"

class PacienteController {
    static list(req,res){
        res.json(getAll())
    }

    static find(req,res){
        res.json(req.param)
    }
}

export default PacienteController