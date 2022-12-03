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
        expiresIn: process.env.JWT_EXPIRES_TIME
    }
    )

    // create refresh token
    const refreshToken = await jwt.sign({
        email: user.email,
        username: user.username
    },
    process.env.JWT_REFRESH,
    {
        expiresIn: "365d"
    }
    )

    // res refresh token to cookie
    res.cookie('refresh_token', refreshToken,{
        httpOnl
    })



    res.status(statusCode).json({
        success: true,
        token,
        user

    });


}

module.exports = sendToken