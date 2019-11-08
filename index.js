
const express = require('express');
const bodyParser = require('body-parser');
// const travelRouter = require('./routes/travels');

const loginRouter = require('./routes/login');
const createRouter = require('./routes/create');
const getRouter = require('./routes/get');
const updateRouter = require('./routes/update');
const deleteRouter = require('./routes/delete');

const app = express();

app.get('/',(req, res) => {
    console.log("this is main page");
    res.send("this is main page");
})

app.use(bodyParser.json());
// router
// app.use('/travels', travelRouter);
app.use('/login', loginRouter);
app.use('/create', createRouter);
app.use('/get', getRouter);
app.use('/update', updateRouter);
app.use('/delete', deleteRouter);

// localhost:3000
app.listen(3000);