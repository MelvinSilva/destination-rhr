const accomodationModel = require('../models/accomodation.model')

class AccomodationController {
    async listAccomodations(req, res) {
        try {
            const accomodations = await accomodationModel.getAccomodations()
            res.status(200).send(accomodations)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async listAccomodationStation(req, res) {
        try {
            const accomodationStation = await accomodationModel.listAccomodationStation(req.params.id_station)
            res.status(200).send(accomodationStation)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

    async updateAccomodation(req, res) {
        try {
            const updateAccomodation = req.body
            const putAccomodation = await accomodationModel.putAccomodation(updateAccomodation, req.params.id)
            res.status(200).send(putAccomodation)
        }
        catch (error) {
            res.status(204).send({ error: error.message })
        }
    }
    //******** SUPPRIMER UN UN HOTEL ********//
    async deleteAccomodation(req, res) {
        try {
            const deleteAccomodation = await accomodationModel.deleteAccomodation(req.params.id)
            res.status(204).send({ message: "la fiche a été supprimée" })
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }

}



module.exports = new AccomodationController()