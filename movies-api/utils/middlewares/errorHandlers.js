const { config } = require('../../config');

function withErrorStack(error, stack) {
    if (config.dev) {
        return { "error": error, "stack": stack }
    }

    return error;
}

function logErrors(err, req, res, next) {
    console.log(err);
    next();
}

function errorHandler(err, req, res, next) {
    res.status(err.status || 500);
    res.json(withErrorStack(err.message, err.stack));
}

module.exports = {
    logErrors, // eslint-disabe-line
    errorHandler
};