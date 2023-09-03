const db = require('../db/db.js')

const getEmployeers = (req, res) => {
    db.query('SELECT * from employee', function (error, results, fields) {
        if (error) throw error;
        res.json({ data: results })
    });
}

const updateEmployee = (req, res) => {
    const { id, name, alamat } = req.params
    const query = `UPDATE employee SET name = '${name}', alamat = '${alamat}', updatedAt = CURRENT_TIMESTAMP WHERE employee.id = ${parseInt(id)}`
    db.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        } else if (results.affectedRows === 0) {
            res.status(500).json({ error: 'No employee with the provided ID found' });
        } else {
            res.json({ data: results });
        }
    })
}

const deleteEmployee = (req, res) => {
    const { id } = req.params
    const query = `DELETE FROM employee WHERE employee.id = ${parseInt(id)}`
    db.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        } else if (results.affectedRows === 0) {
            res.status(500).json({ error: 'No employee with the provided ID found' });
        } else {
            res.json({ data: results });
        }
    })
}

const createEmployee = (req, res) => {
    console.log('Received request body:', req.body);
    console.log('Received file:', req.file);
    const { name, alamat } = req.body
    const image = req.file.filename
    const query = `INSERT INTO employee (name, alamat, nm_photo, createdAt) VALUES ('${name}', '${alamat}','${image}', CURRENT_TIMESTAMP)`
    db.query(query, function (error, results, fields) {
        if (error) {
            throw error;
        } else {
            res.json({ data: results });
        }
    });
}


module.exports = {
    getEmployeers,
    createEmployee,
    updateEmployee,
    deleteEmployee,
};