const development = require('../knexfile').development
const knex = require('knex')(development)

function findUsername (username) {
  return knex ('users')
    .select()
    .where('name', username)
}
