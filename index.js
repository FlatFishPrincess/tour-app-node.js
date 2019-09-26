
import express from'express';
import bodyParser from'body-parser';
import travelRouter from './routes/travels';

const app = express();

app.use(bodyParser.json());
// travel router
app.use('/travels', travelRouter);


// localhost:3000
app.listen(3000);