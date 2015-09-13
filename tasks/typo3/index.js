// =========== [ REQUIRE ] ===========
var co = require("co");

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function() {
    try {
        console.log("test");
        return "test";

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return e;
    }
}; // task.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
