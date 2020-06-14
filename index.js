const express = require('express');

const {
    errorHandler,
    logErrors,
    wrapErrors,
} = require('./utils/middleware/errorHandlers');
const notFoundHandler = require('./utils/middleware/notFoundHandler');

const app = express();

const { config } = require('./config/index.js');
const moviesApi = require('./routes/movies.js');

// Middleware body parser
app.use(express.json());

// Routes
moviesApi(app);

// catch 404 error
app.use(notFoundHandler);

// Error Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
    console.log(`Listening in https://localhost:${config.port}`);
});
