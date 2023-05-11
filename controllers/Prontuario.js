import { getAll } from "../models/Prontuario.js"

class ProntuarioController {
    static list(req,res){
        res.json(getAll())
    }

    static find(req,res){
        res.json(req.param)
    }
}

export default ProntuarioController