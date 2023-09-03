const express = require('express')
const { Me, Login, Logout } = require('../controllers/Login.js')
const { VerifyAuth } = require('../middleware/VerifyAuth.js')

const router = express.Router()

router.get('/me', VerifyAuth, Me)
router.post('/login', Login)
router.delete('/logout', Logout)

module.exports = router
