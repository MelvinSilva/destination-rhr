const accomodationModel = require('../models/accomodations.model')

class AccomodationController {
    async readAccomodations(req, res) {
        try {
            const accomodations = await accomodationModel.getAccomodations()
            res.status(200).send(accomodations)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async updateAccomodations(req, res) {
        try {
            const updateAccomodation = req.body
            const putAccomodations = await accomodationModel.putAccomodations(updateAccomodation, req.params.id)
            res.status(200).send(putAccomodations)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}
module.exports = new AccomodationController()