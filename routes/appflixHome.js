const express = require('express');

function appflixHome(app) {
    const router = express.Router();
    app.use('/', router);

    router.get('/', async function (req, res, next) {
        try {
            res.status(200).json({
                message: 'welcome to Appflix Api',
            });
        } catch (error) {
            next(error);
        }
    });
}

module.exports = appflixHome;
