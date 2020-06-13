const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    // Instance of the new service imported before
    const movieService = new MoviesService();

    router.get('/', async function (req, res, next) {
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
    });

    router.get('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const movie = await movieService.getMovie({ movieId });
            res.status(200).json({
                data: movie,
                message: 'movies fetch correctly',
            });
        } catch (error) {
            next(error);
        }
    });

    router.post('/', async function (req, res, next) {
        const { body: movie } = req;
        try {
            const createdMovieId = await movieService.createMovie({ movie });
            res.status(201).json({
                data: createdMovieId,
                message: 'movie added',
            });
        } catch (error) {
            next(error);
        }
    });

    router.put('/:movieId', async function (req, res, next) {
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
    });

    router.delete('/:movieId', async function (req, res, next) {
        const { movieId } = req.params;
        try {
            const movieDeletedId = await movieService.deleteMovie({ movieId });
            res.status(200).json({
                data: movieDeletedId,
                message: 'movie successfully deleted',
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = moviesApi;
