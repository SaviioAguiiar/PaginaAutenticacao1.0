const Port = 5000
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')  
const UsersAuthenRts = require('./routes/usersAutheRts')

mongoose.connect('mongodb://localhost/UserDbAuthentic')

let db = mongoose.connection

db.on('error', () => {console.log('Houve um erro')})
db.once('open', () => {console.log(`Banco Carregado`)})

app.use(express.static('./public'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'templates'))


app.use('/', UsersAuthenRts)

app.listen(Port, () => {
    console.log(`Server Running on Port: ${Port}`)
})
