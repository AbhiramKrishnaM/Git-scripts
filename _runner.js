const { _delete_dist, _initiate } = require("./_helpers.js");

const { spawn } = require("child_process");

const _args = process.argv;

if (_args[2] === "dist") {
  const _check_dist = spawn("git", ["branch"]);

  _check_dist.stdout.on("data", (data) => {
    const _buffer_string_array = data.toString().split(" ");

    const _regular_expr = /dist\b/;

    const _is_match = _buffer_string_array.filter((item) =>
      _regular_expr.exec(item)
    );

    if (_is_match.length !== 0) {
      _delete_dist();
    } else {
      _initiate();
    }
  });

  _check_dist.stderr.on("data", (data) => {
    console.log(data.toString());
  });
}
