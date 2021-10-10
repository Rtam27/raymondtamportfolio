const User = require('../db/models/User')

const router = require('express').Router()

// const mongoose = require('mongoose');
// const User = require('../db/models/User')

module.exports = router

router.get('/', async (req, res, next) => {
  try {
    // mongoose.model('users').find(function(err,users){
    //   res.send(users)
    // })
    const allUsers = await User.find()
    res.json(allUsers)
    // const users = await User.findAll({
    //   // explicitly select only the id and username fields - even though
    //   // users' passwords are encrypted, it won't help if we just
    //   // send everything to anyone who asks!
    //   attributes: ['id', 'username']
    // })
    // res.json(users)
  } catch (err) {
    next(err)
  }
})

router.post('/', async (req, res, next) => {
    try{
        const username = req.body.username
        const password = req.body.password
        const newUser = await new User({username,password})
        await newUser.save()
    
        // res.json('user added', addUser)
    }
    catch(err){
        next(err)
    }
})
