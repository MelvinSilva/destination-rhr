require("dotenv").config();
const express = require("express");
const app = express();

//******* MIDDLEWARES *********//
app.use(express.json());

const port = process.env.PORT

//******* IMPORT ROUTES *********//
const accomodationRouter = require('./accomodations/accomodations.routes')
const eatRouter = require('./eats/eats.routes')
app.use('/accomodations', accomodationRouter)
app.use('/eats', eatRouter)


app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});


// app.get("/station", (req, res) => {
//   connection.query("SELECT * FROM station", (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Error retrieving data from database");
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.get("/accomodation", (req, res) => {
//   connection.query("SELECT * FROM accomodation", (err, result) => {
//     if (err) {
//       console.error(err);
//       res.status(500).send("Error retrieving data from database");
//     } else {
//       res.json(result);
//     }
//   });
// });

// app.put("/accomodation/:id", (req, res) => {
//   const { id } = req.params;
//   // On récupère les nouvelles valeurs depuis le corps de notre requête
//   const userPropsToUpdate = req.body;
//   // On envoie une requête UPDATE à notre BdD
//   connection.query(
//     "UPDATE accomodation SET ? WHERE id = ?",
//     [userPropsToUpdate, id],
//     (err) => {
//       // Une fois la requête exécutée, on peut répondre à la requête HTTP
//       if (err) {
//         console.log(err);
//         res.status(500).send("Error updating a accomodation");
//       } else {
//         res.status(200).send("Accomodation updated successfully :tada:");
//       }
//     }
//   );
// });

