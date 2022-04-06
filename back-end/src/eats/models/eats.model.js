const mysql = require('mysql2')


//******* CONNEXION DB *********//
class EatModel {
    connection = mysql.createConnection({ 
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    })

    //******* REQUETE GET SUR LA DB *********//
    async getEats() { 
        try {
            const result = await this.connection.promise().query('SELECT * FROM eat')
            return result[0]
        }
        catch (error) {
            throw error
        }
    }

    //******* REQUETE PUT SUR LA DB *********//
    async putEats(updateEat, id) { 
        try {
            const result = await this.connection.promise().query('UPDATE eat SET ? WHERE id = ?', [updateEat, id])
            return result[0]
        }
        catch (error) {
            throw error
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
}

module.exports = new EatModel()