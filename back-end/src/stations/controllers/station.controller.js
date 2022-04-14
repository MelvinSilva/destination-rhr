const stationModel = require('../models/station.model')

class StationController {
    async listStations(req, res) {
        try {
            const stations = await stationModel.listStations()
            res.status(200).send(stations)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
   
}
module.exports = new StationController()