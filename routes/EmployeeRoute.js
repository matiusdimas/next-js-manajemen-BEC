const express = require('express')
const { VerifyAuth, AdminOnly } = require('../middleware/VerifyAuth.js')
const { getEmployeers, createEmployee, updateEmployee, deleteEmployee } = require('../controllers/EmployeeController.js')
const router = express.Router()
const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: './src/image',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage
})

router.get('/employeers', VerifyAuth, getEmployeers)
router.post('/employeers', VerifyAuth, upload.single('image'), createEmployee)
router.patch('/employeers/:id/:name/:alamat', VerifyAuth, updateEmployee)
router.delete('/employeers/:id', VerifyAuth, deleteEmployee)

module.exports = router
