const db = require('../db/db.js')
const jwt = require('jsonwebtoken')
const Login = (req, res) => {
    const { username, password } = req.body
    const query = `SELECT * FROM user where username='${username}' and password ='${password}' `
    db.query(query, function (err, results, fields) {
        if (err) {
            throw err
        } else if (results.length <= 0) {
            res.status(500).json({ msg: 'Wrong Username Or Password' })
        } else {
            const userData = { id: results[0].id, role: results[0].role };
            jwt.sign(userData, process.env.SECRET_JWT, (err, token) => {
                if (err) throw err;
                res.cookie('token', token, {
                    maxAge: 3600000, httpOnly: true, secure: true, path: '/'
                }).json({ token })
            });
        };

    })
}

const Me = async (req, res) => {
    const userId = req.id
    if (!userId) return res.status(500).json({ msg: 'Invalid Session' })
    const query = `SELECT username, role FROM user where id=${userId}`
    db.query(query, async function (err, results, fields) {
        if (err) {
            throw err
        } else if (results.length <= 0) {
            res.status(500).json({ msg: "Invalid User" })
        } else {
            res.json({ data: results })
        };
    })
}
const Logout = (req, res) => {
    res.cookie('token', '', { maxAge: 0 }).clearCookie('token').json({ msg: 'Logout' })
}

module.exports = {
    Login,
    Logout,
    Me,
}