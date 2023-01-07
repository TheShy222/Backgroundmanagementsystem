let express = require('express')
let router = express.Router()
let user = require('./api/user')
let login = require('./api/login')
router.get('/loginInfo', user.get)
router.post('/login', login.post)
module.exports = router
