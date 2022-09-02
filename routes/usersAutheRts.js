const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.get('/', (req,res) => {
    res.render('index') 
})

router.get('/historia', (req,res) => {
    res.render('historia')
})

router.get('/corteGiro', (req, res) => {
    res.render('corteGiro')
})

router.get('/contato', (req, res) => {
    res.render('contato')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/registration', (req, res) => {
    res.render('registration', {error: false, body: {}})
})

router.post('/', express.urlencoded({extended:true}) , userController.addUser)
 
module.exports = router

