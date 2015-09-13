var tasks = {};

// example

// automatically add tasks here
tasks.docker = require("./tasks/docker/index.js").start;
tasks.docker = require("./tasks/docker/index.js").start;
tasks.typo3 = require("./tasks/typo3/index.js").start;
tasks.installMarkdown = require("./tasks/installMarkdown/index.js").start;

module.exports = tasks;
