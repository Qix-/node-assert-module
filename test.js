'use strict';

var should = require('should');

var assertModule = require('./');

it('should not throw for mocha', function() {
  (function() {
    assertModule('mocha');
  }).should.not.throw();
});

it('should throw for foobar-package', function() {
  (function() {
    assertModule('foobar-package');
  }).should.throw();
});

it('should throw a specific message for foobar-package', function() {
  (function() {
    assertModule('foobar-package', 'no foobar');
  }).should.throw('no foobar');
});
