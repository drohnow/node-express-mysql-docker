const express = require('express')
const PORT = process.env.PORT || 3000
const app = express()

app.get('/', (req, res) => {
  res.send('hello!')
})
app.get('/hello', (req, res) => {
  res.send('hi!!')
})

app.listen(PORT, (err) => {
  if (err) throw err
  console.log('Running on port ' + PORT)
})
