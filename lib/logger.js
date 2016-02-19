'use strict';

const Log = require('./models/log');

module.export = (req, res, next) => {
  Log.create({
    userAgent: req.headers['user-agent'],
    route: req.url,
    verb: req.method
  }, next);
}
