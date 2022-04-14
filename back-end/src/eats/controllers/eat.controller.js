const eatModel = require('../models/eat.model')

class EatController {
    async listEats(req, res) {
        try {
            const eats = await eatModel.listEats()
            res.status(200).send(eats)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async updateEat(req, res) {
        try {
            const eat = req.body
            const updateEat = await eatModel.updateEat(eat, req.params.id)
            res.status(200).send(updateEat)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    async deleteEat(req, res) {
        try {
            const eat = req.body
            const deleteEat = await eatModel.deleteEat(eat, req.params.id)
            res.status(200).send(deleteEat)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
}
module.exports = new EatController()