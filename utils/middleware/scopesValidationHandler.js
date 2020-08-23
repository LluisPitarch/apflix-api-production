const boom = require('@hapi/boom');

function scopesValidationHandler(allowedScopes) {
    return function (req, res, next) {
        if (!req.user || (req.user && !req.user.scopes)) {
            return boom.unauthorized('Missing Scopes');
        }

        // Check if allowed scopes array has inside of user scopes and return a boolean
        const hasAccess = allowedScopes
            .map((allowedScope) => req.user.scopes.includes(allowedScope))
            .find((allowed) => Boolean(allowed));

        // if has access call next middleware
        if (hasAccess) {
            next();
        } else {
            next(boom.unauthorized("Your scopes don't allow access"));
        }
    };
}

module.exports = { scopesValidationHandler };
