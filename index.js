
const express = require('express');
const bodyParser = require('body-parser');
// const travelRouter = require('./routes/travels');

const loginRouter = require('./routes/login.js');
const createRouter = require('./routes/create.js');
const getRouter = require('./routes/get.js');
const updateRouter = require('./routes/update.js');
const deleteRouter = require('./routes/delete.js');

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
app.listen(3000, ()=>{
    console.log("listening 3000");
   
});