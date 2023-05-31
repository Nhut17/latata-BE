const GoogleStrategy = require('passport-google-oauth20').Strategy
const passport = require('passport')
require('dotenv').config()



passport.use(
    new GoogleStrategy(
        {
            clientID: "139775155285-vg99ruveuugl0t75un4mcjl9ddjolko3.apps.googleusercontent.com",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
            scope: ["profile","email"]
        },
        function(accessToken, refreshToken,profile, callback)
        {
            callback(null,profile)
        }
    )
)


passport.serializeUser((user,done) => {
    done(null,user)
})

passport.deserializeUser((user,done) => {
    done(null,user)
})