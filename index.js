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
const userMoviesApi = require('./routes/userMovies.js');
const authApi = require('./routes/auth');
const appflixHome = require('./routes/appflixHome.js');

// Middleware body parser
app.use(express.json());

// Routes
authApi(app);
moviesApi(app);
userMoviesApi(app);
appflixHome(app);

// catch 404 error
app.use(notFoundHandler);

// Error Middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

// Helmet Middleware
const helmet = require('helmet');
app.use(helmet);

app.listen(config.port, function () {
    console.log(`Listening in http://localhost:${config.port}`);
});
