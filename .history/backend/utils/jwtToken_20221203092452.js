const jwt = require('jsonwebtoken')

// Create and send token and save in the cookie
const sendToken = async (user,statusCode,res) => {

    // create jwt token
    const token = jwt.sign({
        email: user.email,
        username: user.username
    },
    process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXPIRES_TIME
    }
    )
    console.log('token: ' + token)
    
    

    // options for cookie
    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
        ),
        httpOnly: true
    }

   

    res.status(statusCode).json({
        success: true,
        token,
        user

    });


}

module.exports = sendToken