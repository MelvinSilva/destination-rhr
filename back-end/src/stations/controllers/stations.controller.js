const stationModel = require('../models/stations.model')

class StationController {
    async readStations(req, res) {
        try {
            const stations = await stationModel.getStations()
            res.status(200).send(stations)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
   
}
module.exports = new StationController()