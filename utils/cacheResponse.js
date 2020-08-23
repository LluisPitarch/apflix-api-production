const { config } = require('../config/index.js');

function cacheResponse(res, seconds) {
    if (!config.dev) {
        res.set('Cache-Control', `Public, max-age=${seconds} `);
    }
}
module.exports = cacheResponse;
