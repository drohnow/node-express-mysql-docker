const express = require('express')
// const mysql = require('mysql2')
const util = require('util')
const PORT = process.env.PORT || 3000
const app = express()
app.listen = util.promisify(app.listen)

app.get('/', (req, res) => {
  res.send('hello!')
})
app.get('/hello', (req, res) => {
  res.send('hi!!')
})

async function init() {
  // const connection = await mysql.createConnection('mysql://root:8073@localhost:3306/')
  // await connection.execute('DROP DATABASE IF EXISTS docker_db')
  // await connection.execute('CREATE DATABASE docker_db')
  // await connection.execute('CREATE TABLE docker_db.test(name VARCHAR(50))')
  // await connection.execute('INSERT INTO docker_db.test(name) VALUES (?),(?);', [
  //   'John',
  //   'Bob'
  // ])
  // console.log(await connection.execute('SELECT * FROM docker_db.test'))
  await app.listen(PORT)
  console.log('Running on port ' + PORT)
}

init()
