const { spawn } = require("child_process");

function _delete_dist() {
  const _branch = spawn("git", ["branch", "-D", "dist"]);

  _branch.stdout.on("data", (data) => {
    console.log(data.toString());
    /**
     * after branch deletion of branch
     * create a new branch
     */
    _initiate();
  });

  _branch.stderr.on("data", (data) => {
    console.error(data.toString());
  });
}

function _create_dist() {
  const _create = spawn("git", ["checkout", "-b", "dist"]);

  _create.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  _create.stderr.on("data", (data) => {
    console.error(data.toString());
  });
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
  _create_dist();
}

module.exports = { _delete_dist, _initiate };
