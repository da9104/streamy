const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
// const cookieSession = require('cookie-session')
const session = require('express-session')
const passport = require('passport')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')
require('./models/User')
require('./services/passport')
const authRoutes = require('./routes/auth')

dotenv.config();

mongoose.connect(process.env.DB_STRING)

app.use(bodyParser.json())

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

// app.use(
//     cookieSession({
//         maxAge: 1000 * 60 * 60 * 24,
//         keys: [process.env.COOKIEKEY]
//     })
// )

app.use(session({
    secret: process.env.COOKIEKEY,
    store: MongoStore.create({mongoUrl: process.env.DB_STRING}),
    resave: false,
    saveUninitialized: false,
    cookie: {maxAge: 1000 * 60 * 60 * 24, httpOnly: true} // session is valid for One day
}))

app.use(passport.initialize())
app.use(passport.session())

authRoutes(app) 
require('./routes/billing')(app)

if (process.env.NODE_ENV === 'production') {
  // Express serve up production assets
  app.use(express.static('client/dist'))
  const path = require('path')
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}


app.listen(process.env.PORT || 5000, function() {
    console.log('server is running', process.env.PORT || 5000)
})

module.exports = app