const mysql = require('mysql2')


//******* CONNEXION DB *********//
class AccomodationModel {
    connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    //******* REQUETE GET SUR LA DB *********//
    async getAccomodations() {
        try {
            const result = await this.connection.promise().query('SELECT a.*, s.city FROM accomodation AS a LEFT JOIN station AS s ON a.id_station=s.id')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
    //******* REQUETE GET SUR LA DB pour chaque id_station *********//
    async listAccomodationStation(id_station) {
        try {
            const result = await this.connection.promise().query('SELECT a.*, s.city FROM accomodation AS a LEFT JOIN station AS s ON a.id_station=s.id WHERE a.id_station =  ?', [id_station])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    //******* REQUETE PUT SUR LA DB *********//
    async putAccomodation(updateAccomodation, id) {
        try {
            const result = await this.connection.promise().query('UPDATE accomodation SET ? WHERE id = ?', [updateAccomodation, id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    //******* REQUETE SUPPRESSION USER SUR LA DB *********//
    async deleteAccomodation(id) {
        try {
            const result = await this.connection.promise().query('DELETE FROM accomodation WHERE id = ?', [id])
            return result[0]
        }
        catch (error) {
            throw error
        }
    }
}




//     const { id } = req.params;
//     // On récupère les nouvelles valeurs depuis le corps de notre requête
//     const userPropsToUpdate = req.body;
//     // On envoie une requête UPDATE à notre BdD
//     connection.query(
//         "UPDATE accomodation SET ? WHERE id = ?",
//         [userPropsToUpdate, id],
//         (err) => {
//             // Une fois la requête exécutée, on peut répondre à la requête HTTP
//             if (err) {
//                 console.log(err);
//                 res.status(500).send("Error updating a accomodation");
//             } else {
//                 res.status(200).send("Accomodation updated successfully :tada:");
//             }
//         }
//     );
// });


module.exports = new AccomodationModel()