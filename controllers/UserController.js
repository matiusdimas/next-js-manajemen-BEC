const db = require('../db/db.js')

const getUsers = (req, res) => {
    db.query('SELECT * from user', function (error, results, fields) {
        if (error) throw error;
        res.json({ data: results })
    });
}

const updateUser = (req, res) => {
    const { id, username, password, role } = req.params
    const query = `UPDATE user SET username = '${username}', password = '${password}', role = '${role}', updatedAt = CURRENT_TIMESTAMP WHERE user.id = ${parseInt(id)}`
    db.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        } else if (results.affectedRows === 0) {
            res.status(500).json({ error: 'No user with the provided ID found' });
        } else {
            res.json({ data: results });
        }
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params
    const query = `DELETE FROM user WHERE user.id = ${parseInt(id)}`
    db.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        } else if (results.affectedRows === 0) {
            res.status(500).json({ error: 'No user with the provided ID found' });
        } else {
            res.json({ data: results });
        }
    })
}

const createUser = (req, res) => {
    const { username, password, role } = req.body
    const query = `INSERT INTO user (username, password, role, createdAt) VALUES ('${username}', '${password}', '${role}', CURRENT_TIMESTAMP)`
    db.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        } else {
            res.json({ data: results });
        }
    });
}


module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser,
};