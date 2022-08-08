const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./Database/database.js');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, "image")));
app.use(express.static(path.join(__dirname, "")));
app.use(bodyParser.urlencoded({ extended: false }));

//getting database

//routers
const userRouter = require('./Routes/userRouter');
const productRouter = require('./Routes/productRouter');
const adminRouter = require('./Routes/adminRouter')

//app.use
app.use(cors());
app.use(userRouter);
app.use(productRouter);
app.use(adminRouter);


//listen
app.listen(90);
