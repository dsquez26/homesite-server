const pool = require('../../db')
const queries = require('./queries')

const getNewUsers = (req, res) => {
    pool.query(queries.getNewUsers, (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

const getNewUsersById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getNewUsersById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}


module.exports = {
    getNewUsers,
    getNewUsersById
}