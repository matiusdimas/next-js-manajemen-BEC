const express = require('express')
const { getUsers, updateUser, deleteUser, createUser } = require('../controllers/UserController.js')
const { VerifyAuth, AdminOnly } = require('../middleware/VerifyAuth.js')
const router = express.Router()


router.get('/users', VerifyAuth, AdminOnly, getUsers)
router.post('/users', VerifyAuth, AdminOnly, createUser)
router.patch('/users/:id/:username/:password/:role', VerifyAuth, AdminOnly, updateUser)
router.delete('/users/:id', VerifyAuth, AdminOnly, deleteUser)

module.exports = router
