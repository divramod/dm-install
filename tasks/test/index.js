// =========== [ REQUIRE ] ===========
var co = require("co");
var inquirer = require("inquirer");

// =========== [ MODULE DEFINE ] ===========
var job = {};

// =========== [ job.start() ] ===========
job.start = co.wrap(function*() {
    console.log("test it");

}); // job.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = job;
