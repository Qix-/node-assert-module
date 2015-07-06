'use strict';

var hasModule = require('has-module');

module.exports = function assertModule(name, message) {
  if (!hasModule(name)) {
    throw new Error(message);
  }
};
