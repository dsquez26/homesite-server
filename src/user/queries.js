
const getNewUsers = "SELECT * FROM newusers";
const getNewUsersById = "SELECT * FROM newusers WHERE id = $1"


module.exports = {
    getNewUsers, 
    getNewUsersById
}   