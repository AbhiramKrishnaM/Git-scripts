const { spawn } = require("child_process");

function _delete_dist() {
  const _branch = spawn("git branch -D dist", {
    stdio: "inherit",
    shell: true,
  });
  _initiate();
}

function _create_dist() {
  const _create = spawn("git checkout -b dist", {
    stdio: "inherit",
    shell: true,
  });
  _pull_origin();
}

function _pull_origin() {
  const _pull = spawn("git pull origin master", {
    stdio: "inherit",
    shell: true,
  });

  /**
   * generate dist folder
   */
  _generate_dist();
}

function _generate_dist() {
  const _generate = spawn("npm run generate", {
    stdio: "inherit",
    shell: true,
  });

  /**
   * add changes
   */
  _add_changes();
}

function _add_changes() {
  const _add = spawn("git add --all ", {
    stdio: "inherit",
    shell: true,
  });

  /**
   * commit changes
   */
  _commit_changes();
}

function _commit_changes() {
  const _commit = spawn("git commit -m 'feat: dist generated'", {
    stdio: "inherit",
    shell: true,
  });

  /**
   * push to origin
   */
  _push_origin();
}

function _push_origin() {
  const _push = spawn("git push origin dist", {
    stdio: "inherit",
    shell: true,
  });

  /**
   * checkout to master
   */
  _checkout_master();
}

function _checkout_master() {
  const _checkout = spawn("git checkout master", {
    stdio: "inherit",
    shell: true,
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
