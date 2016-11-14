// entry/index file

// make it compatible with browserify's umd wrapper
window.flvjs = module.exports = require('./flv.js').default;
