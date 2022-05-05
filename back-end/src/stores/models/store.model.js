const mysql = require('mysql2')


//******* CONNEXION DB *********//
class StoreModel {
    connection = mysql.createConnection({ 
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    //******* REQUETE GET SUR LA DB *********//
    async listStores() { 
        try {
            const result = await this.connection.promise().query('SELECT b.*, s.city FROM store AS b LEFT JOIN station AS s ON b.id_station=s.id')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }


        //******* REQUETE GET SUR LA DB pour chaque id_station *********//
        async listStoreStation(id_station) { 
            try {
                const result = await this.connection.promise().query('SELECT a.*, s.city FROM store AS a LEFT JOIN station AS s ON a.id_station=s.id WHERE a.id_station =  ?', [id_station])
                return result[0]
            }
            catch (error) {
                throw error
            }
        }

    //******* REQUETE PUT SUR LA DB *********//
    async updateStore(updateStore, id) { 
        try {
            const result = await this.connection.promise().query('UPDATE store SET ? WHERE id = ?', [updateStore, id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
        //******* REQUETE DELETE SUR LA DB *********//
        async deleteStore(id) { 
            try {
                const result = await this.connection.promise().query('DELETE FROM store WHERE id = ?', [id])
                return result[0]
            }
            catch (error) {
                throw error
            }
        }
}

module.exports = new StoreModel()