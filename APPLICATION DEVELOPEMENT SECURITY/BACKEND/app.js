require('dotenv').config();
const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const helmet = require('helmet');
const cors = require('cors');
const hsts = require('./middleware/hsts');
const mongoose = require('mongoose');

//DB
mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Db connected...'));

//Middleware
app.use(helmet());
app.use(cors({origin: 'https://localhost:3000', optionSuccesStaus: 200 }));
app.use(express.json());
app.use(hsts);

//Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));

//Listen
https
    .createServer(
        {
            key: fs.readFileSync('./keys/key.pem'),
            cert: fs.readFileSync('.keys/cert.pem'),
            passphrase: 'apds',
        },
        app
    )
    .listen(3000);
    