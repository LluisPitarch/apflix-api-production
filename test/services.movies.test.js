const assert = require('assert');
const proxyQuire = require('proxyquire');
const mongoLib = require('../utils/mocks/mongoLib');

const {
    getAllStub,
    createStub,
    MongoLibMock,
} = require('../utils/mocks/mongoLib');

const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', function () {
    const MoviesServices = proxyQuire('../services/movies', {
        '../lib/mongo': MongoLibMock,
    });

    const moviesService = new MoviesServices();

    describe('When getMovies method is called', async function () {
        it('should call the getAll movies MongoLibMock method', async function () {
            await moviesService.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('Should return an array of movies', async function () {
            const result = await moviesService.getMovies({});
            const expectedResult = moviesMock;
            assert.deepEqual(result, expectedResult);
        });
    });
});
