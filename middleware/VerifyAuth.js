require('dotenv').config()
const jwt = require('jsonwebtoken');
const db = require('../db/db.js')

const VerifyAuth = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token || !token.startsWith('Bearer ')) {
        return res.status(403).json({ msg: 'Authorization failed' });
    }
    const tokenValue = token.split(' ')[1];
    try {
        const decoded = jwt.verify(tokenValue, process.env.SECRET_JWT);
        req.role = decoded.role;
        req.id = decoded.id
        next();
    } catch (err) {
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

const AdminOnly = (req, res, next) => {
    const userId = req.id
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

module.exports = { VerifyAuth, AdminOnly };