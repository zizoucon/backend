const express = require('express')
const app = express()

app.get('/', (req,res)=> { //get method
  res.send('Hello ZINEB') //send response
})
app.listen(3000)