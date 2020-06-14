const assert = require('assert');
const buildMessage = require('../utils/buildMessage');

describe.only('utils - buildMessage', function () {
    describe('When we list all movies', function () {
        it('Should return the message:', function () {
            result = buildMessage('movies', 'listAllMovies');
            expected = 'movies listed';
            assert.strictEqual(result, expected);
        });
    });
    describe('When we list a movie', function () {
        it('Should return the message:', function () {
            result = buildMessage('movies', 'listMovie');
            expected = 'movie listed';
            assert.strictEqual(result, expected);
        });
    });
    describe('When we create a movie', function () {
        it('Should return the message:', function () {
            result = buildMessage('movies', 'createMovie');
            expected = 'movie was created';
            assert.strictEqual(result, expected);
        });
    });
    describe('When we update a movie', function () {
        it('Should return the message:', function () {
            result = buildMessage('movies', 'updateMovie');
            expected = 'movie was updated';
            assert.strictEqual(result, expected);
        });
    });
    describe('When we delete a movie', function () {
        it('Should return the message:', function () {
            result = buildMessage('movies', 'deleteMovie');
            expected = 'movie was deleted';
            assert.strictEqual(result, expected);
        });
    });
});
