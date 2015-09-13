var co = require("co");
var jobs = {};

// =========== [ job.index() ] ===========
jobs.index = co.wrap(function*() {
    try {

        // =========== [ get params from user input ] ===========
        var argv2 = process.env.dmnJob || process.argv[2] || "help";

        // =========== [ test ] ===========
        if (false) {}

        // automatically add tasks here

        // =========== [ docker ] ===========
        else if (['docker','docker'].indexOf(argv2) > -1) {
            var task = require("./tasks/docker/index.js");
            task.start();
        }
        // =========== [ docker ] ===========
        else if (['docker','install docker'].indexOf(argv2) > -1) {
            var task = require("./tasks/docker/index.js");
            task.start();
        }
        // =========== [ typo3 ] ===========
        else if (['typo3','t3'].indexOf(argv2) > -1) {
            var task = require("./tasks/typo3/index.js");
            task.start();
        }        
        // =========== [ installMarkdown ] ===========
        else if (['installMarkdown'].indexOf(argv2) > -1) {
            var task = require("./tasks/installMarkdown/index.js");
            yield task.start();
        }        

        // =========== [ help ] ===========
        else {
            require("dm-npm").getCommonTasks(argv2, __dirname);
        }

    } catch (e) {
        console.log("Filename: ", __filename, "\n", e.stack);
    }

    return Promise.resolve();
}); // job.index()


// =========== [ MODULE EXPORT ] ===========
module.exports = jobs;
