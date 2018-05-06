#!/usr/bin/env node
const cmd = require("commander");
const colors = require("colors");
const pjson = require("../package.json");
const server = require("../server");

// exports.printMsg();

cmd.option("-v, --version", "Show version of p5keeper", pjson.version);

// cmd
//   .command("new <collection>")
//   .alias("n")
//   .description("Create new p5 collection")
//   .action(function(req, opt) {
//     generator.collection(req, opt);
//   });

// cmd
//   .command("generate <project>")
//   .alias("g")
//   .option("-e, --es6", "ES6 template")
//   .option("-b, --bundle", "Generate a bundled project")
//   .description("Generate a p5 project")
//   .action(function(req, opt) {
//     generator.project(req, opt);
//   });

// cmd
//   .command("rename <old_project> <new_project>")
//   .alias("mv")
//   .description("Rename p5 project <old> <new-name>")
//   .action(function(req, opt) {
//     generator.rename(req, opt);
//   });

cmd
  .command("server")
  .alias("s")
  .description("Run Front-end Server")
  .option("-p, --port [port]", "HTTP port to start server")
  .action(function(req) {
    server.run(req.port || 5555);
  });

// cmd
//   .command("update")
//   .alias("u")
//   .description("Update libraries to latest version")
//   .action(function(req, res) {
//     generator.update();
//   });

if (cmd.version) {
  console.log("p5keeper version ".grey + pjson.version.grey);
}

cmd.parse(process.argv);
