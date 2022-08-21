const { spawn } = require("child_process");

function _term_msgs(object) {
  object.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  object.stderr.on("data", (data) => {
    console.error(data.toString());
  });
}

function _delete_dist() {
  const _branch = spawn("git", ["branch", "-D", "dist"]);

  _term_msgs(_branch);
}

function _create_dist() {
  const _create = spawn("git", ["checkout", "-b", "dist"]);

  _term_msgs(_create);
}

function _initiate() {
  /**
   * should  create a new branch called dist  and checkout
   * should  pull from origin
   * should generate dist
   * should add and commit
   * should push it to origin
   * should checkout to master and delete dist
   */
}

module.exports = { _delete_dist };
