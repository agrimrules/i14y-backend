const express = require('express');
const bodyParser =  require('body-parser');
const mongoose = require('mongoose');

let dev_db_url = 'mongodb://localhost:27017/i14y';
mongoose.connect(dev_db_url);
mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on('connect', console.log.bind(console, 'connected to mongodb'));
db.on('error', console.error.bind(console, 'Mongo connection error: '));

const patient = require('./routes/patient.routes');
const ehr = require('./routes/ehr.routes');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/patient', patient);
app.use('/ehr', ehr);

app.listen(port , ()=>{
  console.log('Up and running on '+port);
});
