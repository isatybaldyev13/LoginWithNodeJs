const express = require('express')
const _ = require('lodash')
const bodyParser = require('body-parser')
const {mongoose} = require('./db/mongoose')
const {User} = require('./models/user')
const app = express()

app.use(bodyParser.json())




app.post('/users',(req,res)=>{
  var body = _.pick(req.body,['email','password'])
  var user = new User(body)

  user.save().then(()=>{
    return user.generateAuthToken()
  }).then((token)=>{
    res.header('x-auth',token).send(user)
  }).catch((e)=>{
    res.status(400).send(e)
  })
})
app.listen(3000,()=>{
  console.log('Started on port 3000');
})
