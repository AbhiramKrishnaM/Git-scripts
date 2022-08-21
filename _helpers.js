const { spawn } = require("child_process");

function _delete_dist() {
  const _delete_branch = spawn("git", ["branch", "-D", "dist"]);

  _delete_branch.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  _delete_branch.stderr.on("data", (data) => {
    console.error(data.toString());
  });

  return true;
}

module.exports = { _delete_dist };
