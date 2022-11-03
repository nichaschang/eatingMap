require('dotenv').config();
const express = require('express');
var cors = require('cors');
var env = process.env;

const app = express();

app.use(cors({origin: env.WHITE_LIST }));

//about metro information
app.use('/station', require(__dirname + '/models/store_info'))

app.listen(3000)