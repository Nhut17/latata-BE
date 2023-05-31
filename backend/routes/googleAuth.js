const router = require('express').Router()
const passport = require('passport')

router.get("/login/failed", (req,res) => {
    res.status(401).json({
        error: true,
        message: 'login in failure'
    })
})

router.get("/login/success", (req,res) => {

    console.log(req.user)
    if(req.user)
    {
        res.status(200).json({
            error: false,
            user: req.user
        })
    }
    else{
        res.status(401).json({
            error: true,
            message: 'Not Authorized'
        })
    }
})

router.get("/auth/google/callback", passport.authenticate("google",{

    successRedirect: 'http://localhost:3000/',
    failureRedirect: "/login/failed"

}))

module.exports = router