const development = require('../knexfile').development
const knex = require('knex')(development)
const sodium = require('sodium').api

module.exports = {
  create: create,
  exists: exists,
  getById: getById,
  getByName: getByName
}

function create (username, password) {
  const passwordBuffer = new Buffer(password, 'utf8')
  const hash = sodium.crypto_pwhash_str(
    passwordBuffer,
    sodium.crypto_pwhash_OPSLIMIT_INTERACTIVE,
    sodium.crypto_pwhash_MEMLIMIT_INTERACTIVE
  )

  return knex('users')
    .insert({
      username: username,
      hash: hash.toString()
    })
}

function exists (username) {
  return knex('users')
    .count('id as n')
    .where('username', username)
    .then(count => {
      return count[0].n > 0
    })
}

function getById (id) {
  return knex('users')
    .select('id', 'username')
    .where('id', id)
}

function getByName (username) {
  return knex('users')
    .select()
    .where('username', username)
}
