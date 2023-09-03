const db = require('../db/db.js')

const Verify = (req, res, next) => {
    const userId = req.session.userId
    if (!userId) {
        return res.status(401).json({ msg: 'Please Login First' })
    }
    const query = `SELECT * FROM user where id=${userId}`
    db.query(query, function (err, results, fields) {
        if (err) {
            throw err
        } else if (results.length <= 0) {
            res.status(404).json({ msg: 'Invalid User' })
        } else {
            req.userId = results[0].id
            req.role = results[0].role
            next()
        };
    })
}

const AdminOnly = (req, res, next) => {
    const userId = req.session.userId
    const query = `SELECT * FROM user where id=${userId}`
    db.query(query, function (err, results, fields) {
        if (err) {
            throw err
        } else if (results.length <= 0) {
            return res.status(404).json({ msg: 'Invalid User' })
        } else {
            if (results[0].role !== "ADMIN") return res.status(403).json({ msg: "You Have No Access" })
            next()
        };
    })
}

module.exports = {
    Verify,
    AdminOnly,
}