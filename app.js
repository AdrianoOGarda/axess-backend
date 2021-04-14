require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport');


const { setLocals } = require("./middlewares")

mongoose
    .connect(process.env.DB_PROD, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
    .catch((err) => console.error('Error connecting to mongo', err));

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(
    cors({
        credentials: true,
        origin: ["https://axess-design.herokuapp.com", "http://localhost:3001", "http://192.168.1.136:3001",
            process.env.FRONTENDPOINT
        ]
    })
);

app.use(
    session({
        resave: false,
        saveUninitialized: true,
        secret: process.env.SECRET,
        cookie: { maxAge: 1000 * 60 * 60 }
    })
);

app.use(setLocals(app));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

const index = require('./routes/index');
const auth = require('./routes/auth');
app.use('/api', index);
app.use('/api', auth);

// Uncomment this line for production
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

// Uncomment this line for production
// app.get('/*', (req, res) => res.sendFile(__dirname + '/public/index.html'));

module.exports = app;