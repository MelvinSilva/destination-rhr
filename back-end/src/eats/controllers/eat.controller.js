const eatModel = require('../models/eat.model')

class EatController {
    async listEats(req, res) {
        try {
            const result = await eatModel.get()
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async listEatStation(req, res) {
        try {
            const result = await eatModel.getByIdStation(req.params.id_station)
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }


    
/*    async updateEat(req, res) {
        try {
            const eat = req.body
            const result = await eatModel.update(eat, req.params.id)
            res.status(200).send(result)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    
       async deleteEat(req, res) {
        try {
            const eat = req.body
            const result = await eatModel.delete(eat, req.params.id)
            res.status(200).send(result)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }*/
} 

module.exports = new EatController()