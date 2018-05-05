const {SHA256}  =require('crypto-js')
const jwt = require('jsonwebtoken')
var data  = {
  id : 10
}


var token = jwt.sign(data,'123abc')
console.log(token)
var decoded = jwt.verify(token , '123abca')
console.log(decoded)
/*
var message = 'This is a secret message'
var hash = SHA256(message).toString()
console.log('Message '+message)
console.log('Hash : '+hash)

var data = {
  id : 1
}
var token = {
  data,
  hash : SHA256(JSON.stringify(data)+'somesecret').toString()
}
token.id = 4
token.hash = SHA256(JSON.stringify(data)).toString()
var resultHash = SHA256(JSON.stringify(token.data)+'somesecret').toString()
if(resultHash === token.hash){
  console.log('Data was not changed')
}else{
  console.log('Data was changed dont trust')
}*/
