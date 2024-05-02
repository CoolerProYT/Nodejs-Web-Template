const model = require('../models');

module.exports = (req, res, next) => {
    req.models = model;
    next();
};
