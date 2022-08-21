const { _delete_dist } = require("./_helpers.js");

const { spawn } = require("child_process");

const _args = process.argv;

if (_args[2] === "dist") {
  const _check_dist = spawn("git", ["branch"]);

  _check_dist.stdout.on("data", (data) => {
    const _buffer_string_array = data.toString().split(" ");

    const _is_match =
      _buffer_string_array.filter((item) => item === "dist\n").length !== 0;

    if (_is_match) {
      _delete_dist();
    } else {
      console.log(data.toString());
    }
  });

  _check_dist.on("exit", function (code, signal) {
    console.log(
      "child process exited with " + `code ${code} and signal ${signal}`
    );
  });

  _check_dist.stderr.on("data", (data) => {
    console.log(data.toString());
  });
}
