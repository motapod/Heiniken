const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const port = 3100
const dotenv = require('dotenv');

const AppError = require("./utils/appError");


const path = require('path');


const app = express();

dotenv.config({
    path: './config.env'
});


app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api', require('./routes/Routes'));
app.use(express.static(path.join(__dirname, '/files')))



app.use('*', (req, res, next) => {
    const err = new AppError(404, 'fail', 'undefined route');
    next(err, req, res, next);
});

app.listen(port, ()=> {
    
    console.log(`Server running at http://localhost:${port}`);
    
    
});

module.exports = app;