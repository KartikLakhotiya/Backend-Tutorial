// console.log("Hello")

const express = require('express') //require module syntax
const app = express()
const port = 3000 // specifies port number

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req, res) => {
    res.send("kartik")
})

app.get('/login',(req,res) => {
    res.send('<h1>Please Login</h1>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})