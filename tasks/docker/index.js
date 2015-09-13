// =========== [ REQUIRE ] ===========
var co = require("co");
var spawn = require("dm-shell").spawn;

// =========== [ MODULE DEFINE ] ===========
var task = {};

// =========== [ SYNC task.start() ] ===========
task.start = function() {
    try {
        // =========== [ docker ] ===========
        var command = "";
        command = "sudo apt-get install curl";
        command += " && curl -sSL https://get.docker.com/ | sh";
        spawn(command);

        // =========== [ docker compose ] ===========
        command = "curl -L https://github.com/docker/compose/releases/download/VERSION_NUM/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose";
        command += " && chmod +x /usr/local/bin/docker-compose";
        command += " && docker-compose --version";
        spawn(command);

        // =========== [ command completion ] ===========


        return "test";
    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
        return e;
    }
}; // task.start()

// =========== [ MODULE EXPORT ] ===========
module.exports = task;
