const sqlUtilities = require('../utilities/sql-utilities');

const getAllUsers = async (req, res) => {
    try {
        const query = `SELECT * FROM users`
        const users = await sqlUtilities.globalSqlQuery(query);
        console.log(users);
        if (users.length) {
            res.json({
                message: "Users Found",
                users
            })
        } else {
            res.json({
                message: "Empty User Records",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


const getUserById = async (req, res) => {
    try {
        const { id } = req.body
        const query = `SELECT * FROM users WHERE id = ?;`
        const users = await sqlUtilities.globalSqlQuery(query, id);
        if (users.length) {
            res.json({
                message: "User Found",
                users
            })
        } else {
            res.json({
                message: "Empty User Records",
            });
        }
    } catch (error) {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}
module.exports = { getAllUsers, getUserById };