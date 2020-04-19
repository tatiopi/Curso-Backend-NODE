const express = require('express');
const MoviesService = require('../services/movies');
const { moviesMock } = require('../utils/mocks/movies');

console.log('cargando movies...');

function moviesAPI(app) {
    const router = express.Router();
    app.use("/api/movies", router);
    const moviesService = new MoviesService();

    router.get('/', async function(req, res, next) {
        const { tags } = req.query;
        try {
            const movies = await moviesService.getMovies({ tags });
            ///throw new Error('Error getting movies');
            res.status(200).json({
                data: movies || [],
                message: 'movie listed'
            });
        } catch (err) {
            next(err);
        }
    });

    router.get('/:id', async function(req, res, next) {
        const movieId = req.params.id;
        try {
            const movies = await moviesService.getMovie({ movieId });
            res.status(200).json({
                data: movies || [],
                message: 'movie listed'
            });
        } catch (err) {
            next(err);
        }
    });

    router.post('/', async function(req, res, next) {
        try {
            const movie = req.body;
            const createMovieId = await moviesService.createMovie({ data: movie });
            res.status(201).json({
                data: createMovieId,
                message: 'movie created'
            });
        } catch (err) {
            next(err);
        }
    });

    router.put('/:movieId', async function(req, res, next) {
        try {
            const movieId = req.params.id;
            const movie = req.body;
            const updatedMovieId = await moviesService.updateMovie({ movieId, movie });
            res.status(200).json({
                data: updatedMovieId,
                message: 'movie update'
            });
        } catch (err) {
            next(err);
        }
    });

    router.delete('/:movieId', async function(req, res, next) {
        try {
            const movieId = req.params.id;
            const deletedMovied = await moviesService.deleteMovie({ movieId });
            res.status(200).json({
                data: deletedMovied,
                message: 'ñaca ñaca la cigala'
            });
        } catch (err) {
            next(err);
        }
    });

}



module.exports = moviesAPI;