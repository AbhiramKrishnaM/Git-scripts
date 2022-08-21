const { spawn } = require("child_process");

const _args = process.argv;

if (_args[2] === "dist") {
  // check if dist branch exists

  const _check_dist = spawn("git", ["branch"]);

  _check_dist.stdout.on("data", (data) => {
    const _buffer_string_array = data.toString().split(" ");
    console.log(_buffer_string_array);
  });

  _check_dist.on("exit", function (code, signal) {
    console.log(
      "child process exited with " + `code ${code} and signal ${signal}`
    );
  });
}
