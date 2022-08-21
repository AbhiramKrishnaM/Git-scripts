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
    /**
     * pull from origin master
     */
    _pull_origin();
  });

  _create.stderr.on("data", (data) => {
    console.error(data.toString());
  });
}

function _pull_origin() {
  const _pull = spawn("git", ["pull", "origin", "master"]);

  _pull.stdout.on("data", (data) => {
    console.log(data.toString());
    /**
     * generate dist folder
     */
    _generate_dist();
  });

  _pull.stderr.on("data", (data) => {
    console.error(data.toString());
  });
}

function _generate_dist() {
  const _generate = spawn("npm", ["run", "generate"]);

  _generate.stdout.on("data", (data) => {
    console.log(data.toString());
    _add_changes();
  });

  _generate.stderr.on("data", (data) => {
    console.error(data.toString());
  });
}

function _add_changes() {
  const _add = spawn("git", ["add", "--all"]);

  _add.stdout.on("data", (data) => {
    console.log(data.toString());
    _commit_changes();
  });

  _add.stderr.on("data", (data) => {
    console.error(data.toString());
  });
}

function _commit_changes() {
  const _commit = spawn("git", ["commit", "-m", "'feat: dist generated'"]);

  _commit.stdout.on("data", (data) => {
    console.log(data.toString());
    _push_origin();
  });

  _commit.stderr.on("data", (data) => {
    console.error(data.toString());
  });
}

function _push_origin() {
  const _push = spawn("git", ["push", "origin", "dist"]);

  _push.stdout.on("data", (data) => {
    console.log(data.toString());
    _checkout_master();
  });

  _push.stderr.on("data", (data) => {
    console.error(data.toString());
  });
}

function _checkout_master() {
  const _checkout = spawn("git", ["checkout", "master"]);

  _checkout.stdout.on("data", (data) => {
    console.log(data.toString());
  });

  _checkout.stderr.on("data", (data) => {
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
   * should checkout to master
   */
  _create_dist();
}

module.exports = { _delete_dist, _initiate };
