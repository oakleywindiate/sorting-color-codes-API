sortCodesData = require('./data');

const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors())

app.locals.codes = sortCodesData;

// app.set('port', process.env.PORT || 3001);
app.locals.title = 'Sorting Color Codes API';

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.warn(`App listening on http://localhost:${PORT}`);
});

app.get('/', (request, response) => {
    response.send('Successful');
});  

app.get('/training', (request, response) => {
    response.status(200).json(app.locals.codes);
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on http://localhost:${app.get('port')}.`);
});