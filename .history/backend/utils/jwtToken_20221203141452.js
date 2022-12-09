const jwt = require('jsonwebtoken')

// Create and send token and save in the cookie
const sendToken = async (user,statusCode,res) => {

    // create jwt token
    const token = await jwt.sign({
        email: user.email,
        username: user.username
    },
    process.env.JWT_SECRET,
    {
        expiresIn: "20s"
    }
    )

    // create refresh token
    const refreshToken = await jwt.sign({
        email: user.email,
        username: user.username
    },
    process.env.JWT_REFRESH,
    {
        expiresIn: "2d"
    }
    )

    // push refresh token in DB
    // user.refreshToken.concat(refreshToken)

    // res refresh token to cookie
    res.cookie('refresh_token', refreshToken,{
        httpOnly: true,
        secure: false,
        path:'/',
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    })



    res.status(statusCode).json({
        success: true,
        token,
        user

    });


}

module.exports = sendToken