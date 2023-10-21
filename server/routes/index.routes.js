const router = require('express').Router();

const authRoutes = require('./auth.routes.js');
const userRoutes = require('./user.routes.js');
const postRoutes = require('./post.routes.js');

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/blog', postRoutes);

module.exports = router;
