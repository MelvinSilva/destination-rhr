const accomodationModel = require('../models/accomodation.model')

class AccomodationController {
    async listAccomodations(req, res) {
        try {
            const result = await accomodationModel.get()
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async listAccomodationByStation(req, res) {
        try {
            const result = await accomodationModel.getByStation(req.params.id_station)
            res.status(200).send(result)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async updateAccomodation(req, res) {
        try {
            const updateAccomodation = req.body
            const result = await accomodationModel.update(updateAccomodation, req.params.id)
            res.status(200).send(result)
        }
        catch (error) {
            res.status(204).send({ error: error.message })
        }
    }

    async deleteAccomodation(req, res) {
        try {
            const result = await accomodationModel.delete(req.params.id)
            res.status(204).send({ message: "la fiche a été supprimée" })
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}



module.exports = new AccomodationController()