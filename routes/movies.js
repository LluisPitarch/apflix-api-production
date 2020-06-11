const express = require('express');
const moviesMock = require('../utils/mocks/movies.js');

function moviesApi(app) {
    const router = express.Router();
    app.use('/api/movies', router);

    router.get('/', async function (req, res, next) {
        try {
            const movies = await Promise.resolve(moviesMock);
            res.status(200).json({
                data: movies,
                message: 'movies listed',
            });
        } catch (error) {
            next(error);
        }
    });

    router.get('/:movieId', async function (req, res, next) {
        try {
            const movie = await Promise.resolve(moviesMock[0]);
            res.status(200).json({
                data: movie,
                message: 'movies fetch correctly',
            });
        } catch (error) {
            next(error);
        }
    });

    router.post('/', async function (req, res, next) {
        try {
            const createdMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(201).json({
                data: createdMovieId,
                message: 'movie added',
            });
        } catch (error) {
            next(error);
        }
    });

    router.put('/:movieId', async function (req, res, next) {
        try {
            const updatedMovieId = await Promise.resolve(moviesMock[0].id);
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie updated',
            });
        } catch (error) {
            next(error);
        }
    });

    router.delete('/:movieId', async function (req, res, next) {
        try {
            const movieDeletedId = await Promise.resolve(moviesMock[0].id);
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
