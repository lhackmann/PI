import { getAll } from "../models/Medicacao.js"

class MedicacaoController {
    static list(req,res){
        res.json(getAll())
    }

    static find(req,res){
        res.json(req.param)
    }
}

export default MedicacaoController