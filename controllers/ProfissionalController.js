import { getAll } from "../models/Profissional.js"

class ProfissionalController {
    static list(req,res){
        res.json(getAll())
    }

    static find(req,res){
        res.json(req.param)
    }
}

export default ProfissionalController