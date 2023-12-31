const dotenv = require('dotenv');
dotenv.config();
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = mongoose.model('users');


passport.serializeUser((user, done) => {
    done(null, user.id);
 });

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user)
    })
})

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    // callbackURL: '/auth/google/callback',
    callbackURL: process.env.CALLBACKURL,
    userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo",
    proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {
    const existingUser = await User.findOne({ googleId: profile.id })
    if (existingUser) {
       return done(null, existingUser)
    } 
    // create a new user
    const user = await new User({
         googleId: profile.id, 
         username: profile.emails[0].value,
         email: profile._json.email, 
         name: profile.displayName,
         avatar: profile._json.picture  
        }).save()
    done(null, user)
}))
