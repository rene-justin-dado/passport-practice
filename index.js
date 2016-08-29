var bodyParser = require('body-parser')
var express = require('express')
var hbs = require('express-handlebars')
var path = require('path')

const passport = require('passport')
const expressSession = require('express-session')
const flash = require('connect-flash')
const LocalStrategy = require('passport-local')

const localSodium = require('./lib/local-sodium')
const indexRoutes = require('./routes')

var index = require('./routes/index')

var PORT = 3000

var app = express()
app.engine('hbs', hbs())
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'views'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(expressSession({
  resave: false,
  secret: 'CHANGE THIS IN PRODUCTION!',
  saveUninitialized: false
}))
app.use(flash())
app.use(passport.initialize())
app.use(passport.session())

passport.use(new LocalStrategy(localSodium.strategy))
passport.serializeUser(localSodium.serialize)
passport.deserializeUser(localSodium.deserialize)


app.get('/', index.get)
app.get('/display', index.display)

app.get('/login', index.loginForm)
app.post('/login', index.login)



app.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
