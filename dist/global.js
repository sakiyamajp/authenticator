"use strict";

require('babel-polyfill');

global.L = console.log;

global.sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};