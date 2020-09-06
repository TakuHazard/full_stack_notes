const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
    console.log('INSIDE LOGIN RIGHT NOW')
    const body = request.body
    console.log('Trying to post', body)
    const user = await User.findOne({ username : body.username })
    const passwordCorrect = user === null ? false : await bcrypt.compare(body.password, user.passwordHash)

    if(!(user && passwordCorrect)){
        console.log('invalid username or password')
        return response.status(401).json({ error : 'invalid username or password' })
    }

    const userForToken = {
        username : user.username,
        id : user._id,
    }

    const token = jwt.sign(userForToken, process.env.SECRET)

    console.log('logged in with', token)
    response
        .status(200)
        .send({ token, username : user.username, name : user.name })
})

module.exports = loginRouter