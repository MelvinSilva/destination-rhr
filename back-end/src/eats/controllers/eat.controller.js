const eatModel = require('../models/eat.model')

class EatController {
    async getEats(req, res) {
        try {
            const result = await eatModel.get()
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async getEatByStation(req, res) {
        try {
            const result = await eatModel.getByIdStation(req.params.id_station)
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
} 

module.exports = new EatController()