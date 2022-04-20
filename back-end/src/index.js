require("dotenv").config();
const express = require("express");
const cors = require('cors')
const app = express();

//******* MIDDLEWARES *********//
app.use(express.json());
app.use(cors());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3001');
  res.header('Access-Control-Allow-Credentials', true);
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PATCH, DELETE');
  next();
});

const port = process.env.PORT

//******* IMPORT ROUTES *********//
const accomodationRouter = require('./accomodations/accomodations.routes')
const eatRouter = require('./eats/eats.routes')
const storeRouter = require('./stores/stores.routes')
const stationRouter = require('./stations/stations.routes')
const userRouter = require('./users/users.routes')
app.use('/accomodations', accomodationRouter)
app.use('/eats', eatRouter)
app.use('/stores', storeRouter)
app.use('/stations', stationRouter)
app.use('/users', userRouter)



app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

