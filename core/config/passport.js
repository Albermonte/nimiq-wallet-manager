const mongoose = require('mongoose')
const passport = require('passport')
const LocalStrategy = require('passport-local')

const Users = mongoose.model('Users')

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
}, (username, password, done) => {
    Users.findOne({username: username, active: true})
        .then((user) => {
            if (!user || !user.validatePassword(password)) {
                return done(null, false, {errors: {'username or password': 'is invalid'}})
            }

            return done(null, user)
        }).catch(done)
}))