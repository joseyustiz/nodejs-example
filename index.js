//using prd ready esm for es6 modularization
require = require("esm")(module); // overwrite require nodejs global level function by importing the ESL module
module.exports = require("./server.js"); // then executing the function