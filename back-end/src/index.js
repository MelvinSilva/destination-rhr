require("dotenv").config();
const express = require("express");
const app = express();

//******* MIDDLEWARES *********//
app.use(express.json());

const port = process.env.PORT

//******* IMPORT ROUTES *********//
const accomodationRouter = require('./accomodations/accomodations.routes')
const eatRouter = require('./eats/eats.routes')
const stationRouter = require('./stations/stations.routes')
const userRouter = require('./users/users.routes')
app.use('/accomodations', accomodationRouter)
app.use('/eats', eatRouter)
app.use('/stations', stationRouter)
app.use('/users', userRouter)



app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

