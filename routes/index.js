const express = require('express')
const development = require('../knexfile').development
const knex = require('knex')(development)
const passport = require('passport')
const db = require('../lib/somethingWhatever')


module.exports = {
  get: get,
  display: display,
  loginForm: loginForm,
  login: login
}

function get (req, res) {
  knex('users')
    .select()
    .then(function (users) {
      req.session.users = users
      res.redirect('/display')
    })
    .catch(function (err) {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}
// As a user, I want to load the list of users on the / route, but display them
// on the /display route. Don't ask why, just do it!
//
// Sometimes client demands can be capricious. Store the list of
// users in req.session and redirect to the other route.

function display (req, res) {
  knex('users')
    .select()
    .then(users => {
      res.render('index', req.session)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
}

// As a user, I want to see a login form whenever I visit /login so that
// I can enter my username and password.
// Create the form, providing two input fields: one named 'username' and
// one named 'password'.
// Make the form's action /login, and use method POST.

function loginForm (req, res) {
  res.render('loginForm')
}

// As an administrator, I only want to allow access to /secret to user
// aardvark@example.org, so that I can limit access to the awesome secret inside.
//
// Implement Passport's local strategy, protecting /secret. Don't worry too much
// about passwords just yet: return a user object from the database
// if username is aardvark@example.org.

function login (req, res) {
  return knex ('users')
  .select()
  .where('name', req.body.username)
  .then(data => {
    res.render('index', {users: data})
  })
}
