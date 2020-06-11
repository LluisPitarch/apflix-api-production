const express = require('express');
const app = express();

const { config } = require('./config/index.js');
const moviesApi = require('./routes/movies.js');

function bisiesto(year) {
    if (year % 4 === 0) {
        return `${year} es bisiesto`;
    } else {
        return `${year} no es bisiesto`;
    }
}

moviesApi(app);

app.listen(config.port, function () {
    console.log(`Listening in https://localhost:${config.port}`);
});
