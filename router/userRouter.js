const express = require('express');
const { getUsers, addUser, updateUser, deleteUser } = require('../controller/userController');
const router = express.Router()


router.get('/', getUsers);
router.post('/add', addUser);
router.put('/update', updateUser);
router.delete('/delete', deleteUser)


module.exports = router;