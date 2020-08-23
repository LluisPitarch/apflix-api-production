const express = require('express');
const passport = require('passport');

// service
const MoviesService = require('../services/movies');

// Validation utils
const {
    updateMovieSchema,
    createMovieSchema,
    movieIdSchema,
} = require('../utils/schemas/movies');
const validationHandler = require('../utils/middleware/validationHandler');
const {
    scopesValidationHandler,
} = require('../utils/middleware/scopesValidationHandler');

// Cache import modules
const cacheResponse = require('../utils/cacheResponse');
const {
    FIVE_MINUTES_IN_SECONDS,
    SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

// JWT strategy
require('../utils/auth/strategies/jwt');

// ***** App ***** //

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    // Instance of the new service imported before
    const movieService = new MoviesService();

    router.get(
        '/',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:movies']),
        async function (req, res, next) {
            cacheResponse(res, FIVE_MINUTES_IN_SECONDS);
            const { tags } = req.query;
            try {
                const movies = await movieService.getMovies({ tags });
                res.status(200).json({
                    data: movies,
                    message: 'movies listed',
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.get(
        '/:movieId',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['read:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'),
        async function (req, res, next) {
            cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
            const { movieId } = req.params;
            try {
                const movie = await movieService.getMovie({ movieId });
                res.status(200).json({
                    data: movie,
                    message: 'movie listed',
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.post(
        '/',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['create:movies']),
        validationHandler(createMovieSchema),
        async function (req, res, next) {
            const { body: movie } = req;
            try {
                const createdMovieId = await movieService.createMovie({
                    movie,
                });
                res.status(201).json({
                    data: createdMovieId,
                    message: 'movie added',
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.put(
        '/:movieId',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['create:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'),
        validationHandler(updateMovieSchema),
        async function (req, res, next) {
            const { movieId } = req.params;
            const { body: movie } = req;

            try {
                const updatedMovieId = await movieService.updateMovie({
                    movieId,
                    movie,
                });
                res.status(200).json({
                    data: updatedMovieId,
                    message: 'movie updated',
                });
            } catch (error) {
                next(error);
            }
        }
    );

    router.delete(
        '/:movieId',
        passport.authenticate('jwt', { session: false }),
        scopesValidationHandler(['delete:movies']),
        validationHandler({ movieId: movieIdSchema }, 'params'),
        async function (req, res, next) {
            const { movieId } = req.params;
            try {
                const movieDeletedId = await movieService.deleteMovie({
                    movieId,
                });
                res.status(200).json({
                    data: movieDeletedId,
                    message: 'movie successfully deleted',
                });
            } catch (error) {
                next(error);
            }
        }
    );
}

module.exports = moviesApi;
