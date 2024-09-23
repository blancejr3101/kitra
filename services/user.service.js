const userCollectedTreasures = async (req) => {
    const user_id = req.user_id;

    const query = `SELECT t.* FROM treasures t
    JOIN users u ON t.id = u.id
    WHERE u.id = ?`

    const params = [user_id]


    
}





module.exports = { userCollectedTreasures };