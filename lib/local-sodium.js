const sodium = require('sodium').api
const users = require('./users')

module.exports = {
  strategy: sodiumStrategy,
  serialize: serializeUser,
  deserialize: deserializeUser
}

function deserializeUser (id, done) {
  users.getById(id)
    .then(users => {
      if (users.length === 0) {
        return done(null, false)
      }
      done(null, users[0])
    })
    .catch(err => {
      done(err, false)
    })
}

function serializeUser (user, done) {
  done(null, user.id)
}

function sodiumStrategy (username, password, done) {
  users.getByName(username)
    .then(users => {
      if (users.length === 0) {
        return done(null, false, { message: 'Unrecognised user.' })
      }

      const user = users[0]
      if (!verifyUser(user, password)) {
        return done(null, false, { message: 'Incorrect password.' })
      }
      done(null, {
        id: user.id,
        username: user.username
      })
    })
    .catch(err => {
      done(err, false, { message: "Couldn't check your credentials with the database." })
    })
}

function verifyUser (user, password) {
  const hash = new Buffer(user.hash, 'utf8')
  const passwordBuffer = new Buffer(password, 'utf8')
  return sodium.crypto_pwhash_str_verify(hash, passwordBuffer)
}
