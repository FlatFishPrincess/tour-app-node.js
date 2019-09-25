
const express = require('express');
const bodyParser = require('body-parser');

import travelRouter from './routes/travels';

const app = express();
app.use(bodyParser.json());

app.use('/travels', travelRouter);


app.listen(3000);