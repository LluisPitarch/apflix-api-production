const assert = require('assert');
const proxyQuire = require('proxyquire');

const { moviesMock, MovieServiceMocks } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function () {
    const route = () => {
        return proxyQuire('../routes/movies', {
            '../services/movies': MovieServiceMocks,
        });
    };

    const request = testServer(route);
    describe('GET /movies', function () {
        it('should respond with status 200', function (done) {
            request.get('/api/movies').expect(200, done);
            done();
        });
        it('should respond with the list of movies', function (done) {
            request.get('/api/movies').end((err, res) => {
                assert.deepEqual(res.body, {
                    data: moviesMock,
                    message: 'movies listed',
                });
            });
            done();
        });
    });
});
