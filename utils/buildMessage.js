function buildMessage(entity, action) {
    if (action === 'listAllMovies') {
        return 'movies listed';
    }
    if (action === 'listMovie') {
        return 'movie listed';
    }
    if (action === 'createMovie') {
        return 'movie was created';
    }
    if (action === 'updateMovie') {
        return 'movie was updated';
    }
    if (action === 'deleteMovie') {
        return 'movie was deleted';
    }
}

module.exports = buildMessage;
