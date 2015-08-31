var tasks = {};

// example
tasks.test = require("./tasks/test/index.js").start;

// automatically add tasks here
tasks.installMarkdown = require("./tasks/installMarkdown/index.js").start;

module.exports = tasks;
