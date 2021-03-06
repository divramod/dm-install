// =========== [ REQUIRE ] ===========
var co = require("co");
var spawn = require("dm-shell").spawn;

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function(p1) {
    try {
        var p1 = p1 || process.argv[3] || undefined;
        var command = "sudo apt-get install php5 git php5-curl";
        spawn(command);
        return p1;
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return e;
    }
}; // task.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
