const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}$/);

const UserSchema = {
    name: joi.string().max(100).required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
};

const createUserSchema = {
    ...UserSchema,
    isAdmin: joi.bool(),
};

const createProviderUserSchema = {
    ...UserSchema,
    apiKeyToken: joi.string().required(),
};
module.exports = {
    userIdSchema,
    UserSchema,
    createUserSchema,
    createProviderUserSchema,
};
