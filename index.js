const express = require('express')
const mongoose = require('mongoose');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

async function main() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/testProductDb');
        console.log("data base connected")
    } catch (error) {
        console.log(error)
        console.log(error.message)
        
    }

  }
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
main();