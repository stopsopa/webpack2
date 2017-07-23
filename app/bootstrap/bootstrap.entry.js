'use strict';

const log = require('log');

// this works
// require('../../node_modules/bootstrap/dist/css/bootstrap.css');
// require('../../node_modules/bootstrap/dist/css/bootstrap-theme.css');

// this works too, it's better to use
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/css/bootstrap-theme.css');

// loading from local linked directory - so cool :)
require('app/example/index.css');


log('test autoloade (provide) log library');


