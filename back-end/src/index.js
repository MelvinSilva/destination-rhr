require("dotenv").config();
const express = require("express");
const app = express();
/* Middleware */
app.use(express.json());

const port = process.env.PORT ?? 3000; 
//peut etre pas besoin du 3000 car la const va chercher sur le .env

// import your routes here
const accomodationRouter = require('./accomodations/accomodations.routes')
app.use('/accomodations', accomodationRouter)

// connection.connect((err) => {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//   } else {
//     console.log("connected as id " + connection.threadId);
//   }
// });




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

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});