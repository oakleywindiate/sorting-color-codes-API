monoCodesData = require('./monoCodesData');
splitCodesData = require('./splitCodesData');

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())

app.locals.monoCodes = monoCodesData;
app.locals.splitCodes = splitCodesData;

// app.set('port', process.env.PORT || 3001);
app.locals.title = 'Sorting Color Codes API';

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    response.send('Successful');
});  

app.get('/mono-codes', (request, response) => {
    response.status(200).json(app.locals.monoCodes);
});

app.get('/split-codes', (request, response) => {
    response.status(200).json(app.locals.splitCodes);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});