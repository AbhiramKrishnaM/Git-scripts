const { exec } = require('child_process')

function _delete_dist() {
  exec('git branch -D dist', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }

    console.log(stdout)

    _initiate()
  })
}

function _create_dist() {
  exec('git checkout -b dist', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }

    console.log(stdout)

    /**
     * pull from origin
     */

    _pull_origin()
  })
}

function _pull_origin() {
  exec('git pull origin master', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }
    console.log(stdout)

    /**
     * generate dist folder
     */
    _generate_dist()
  })
}

function _generate_dist() {
  exec('npm run generate', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }

    console.log(stdout)

    /**
     * add changes
     */
    _add_changes()
  })
}

function _add_changes() {
  exec('git add --all', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }

    console.log(stdout)
    /**
     * commit changes
     */
    _commit_changes()
  })
}

function _commit_changes() {
  exec(`git commit -m "feat: dist generated"`, (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }
    console.log(stdout)

    /**
     * push to origin
     */
    _push_origin()
  })
}

function _push_origin() {
  exec('git push origin dist', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }

    console.log(stdout)

    /**
     * checkout to master
     */
    _checkout_master()
  })
}

function _checkout_master() {
  exec('git checkout master', (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`)
      return
    }

    console.log(stdout)
  })
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
  _create_dist()
}

module.exports = { _delete_dist, _initiate }
