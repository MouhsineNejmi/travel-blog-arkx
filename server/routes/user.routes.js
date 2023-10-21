const router = require('express').Router();
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// const {
//   getAllUsers,
//   getUserById,
//   searchUser,
//   updateUserData,
//   deleteUserAccount,
// } = require('../controllers/user.controller');

// router.get

module.exports = router;
