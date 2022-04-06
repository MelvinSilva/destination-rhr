const eatModel = require('../models/eats.model')

class EatController {
    async readEats(req, res) {
        try {
            const eats = await eatModel.getEats()
            res.status(200).send(eats)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async updateEats(req, res) {
        try {
            const updateEats = req.body
            const putEats = await eatModel.putEats(updateEats, req.params.id)
            res.status(200).send(putEats)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
}
module.exports = new EatController()