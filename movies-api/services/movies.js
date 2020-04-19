// Capa de servicios
// const { moviesMock } = require('../utils/mocks/movies');
const MongoLib = require('../lib/mongo');

class MoviesService {

    constructor() {
        this.collection = 'movies';
        this.mongoDB = new MongoLib();
    }

    async getMovies({ tags }) {
        //const movies = await Promise.resolve(movieMock);
        const query = tags && { tags: { $in: tags } }
        const movies = await this.mongoDB.getAll(this.collection, query);
        return movies || [];
    }

    async getMovie({ movieId }) {
        //const movies = await Promise.resolve(movieMock[0]);
        const movies = await this.mongoDB.get(this.collection, movieId);
        return movies || {};
    }

    async createMovie({ data }) {
        const createMovieId = await this.mongoDB.create(this.collection, data);
        console.log(createMovieId);
        return createMovieId;
    }

    async updateMovie({ movieId, movie } = {}) {
        const updateMovieId = await this.mongoDB.update(this.collection, movieId, movie);
        return updateMovieId;
    }

    async deleteMovie({ movieId }) {
        const deleteMovieId = await this.mongoDB.delete(this.collection, movieId);
        return deleteMovieId;
    }
}

module.exports = MoviesService;