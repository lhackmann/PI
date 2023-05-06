import { getAll } from "../models/Contato.js"

class ContatoController {
    static list(req,res){
        res.json(getAll())
    }

    static find(req,res){
        res.json(req.param)
    }
}

export default ContatoController