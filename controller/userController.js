const users = require('../data/users')

//get list of users
const getUsers = (req, res) => {
    res.send(users)
}

//add a new user
const addUser = async(req, res) => {
    await users.push(req.body);
    res.send(users);
}

//update a user
const updateUser = (req, res) => {
    for (let i = 0; i < users.length; i++){
        if (users[i].username === req.body.username) {
            users.splice(i, 1, req.body);
            break;
        }
    }

    res.send(users)
}

//delete a user
const deleteUser = (req, res) => {
        for (let i = 0; i < users.length; i++) {
          if (users[i].username === req.body.username) {
            users.splice(i, 1);
            break;
          }
        }

        res.send(users);
}



module.exports = {getUsers, updateUser, deleteUser, addUser}