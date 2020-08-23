const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const jwt = require('jsonwebtoken');

// get the env secret
const { config } = require('../../../config');

// error handler
const boom = require('@hapi/boom');

// User service class
const UsersService = require('../../../services/users');

passport.use(
    new Strategy(
        {
            secretOrKey: config.authJwtSecret,
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        },
        async function (tokenPayload, cb) {
            const usersService = new UsersService();

            try {
                const user = await usersService.getUser({
                    email: tokenPayload.email,
                });

                if (!user) {
                    return cb(boom.unauthorized(), false);
                }

                delete user.password;

                cb(null, { ...user, scopes: tokenPayload.scopes });
            } catch (error) {
                return cb(error);
            }
        }
    )
);
