monoCodesData = require('../monoCodesData');
splitCodesData = require('../splitCodesData');
canCodesData = require('../canCodesData');

// const cors = require('cors');
const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// app.use(cors())

app.locals.monoCodes = monoCodesData;
app.locals.splitCodes = splitCodesData;
app.locals.canCodes = canCodesData;

app.locals.title = 'Sorting Color Codes API';

router.get('/', (request, response) => {
    response.send('Successful');
});  

router.get('/mono-codes', (request, response) => {
    response.status(200).json(app.locals.monoCodes);
});

router.get('/split-codes', (request, response) => {
    response.status(200).json(app.locals.splitCodes);
});

router.get('/can-codes', (request, response) => {
    response.status(200).json(app.locals.canCodes);
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);