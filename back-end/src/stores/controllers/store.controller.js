const storeModel = require('../models/store.model')

class StoreController {
    async getAllStores(req, res) {
        try {
            const stores = await storeModel.get()
            res.status(200).send(stores)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async getStore(req, res) {
        try {
            const storeStation = await storeModel.getStoreByStation(req.params.id_station)
            res.status(200).send(storeStation)
        }
        catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
    async updateStore(req, res) {
        try {
            const store = req.body
            const updateStore = await storeModel.update(store, req.params.id)
            res.status(200).send(updateStore)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
    async deleteStore(req, res) {
        try {
            const store = req.body
            const deleteStore = await storeModel.delete(store, req.params.id)
            res.status(200).send(deleteStore)
        }
        catch (error) {
            res.status(404).send({ error: error.message })
        }
    }
}
module.exports = new StoreController()