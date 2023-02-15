const { addUser, signIn } = require('./app.controller');

const router = require('express').Router();

router.post('/registration', addUser);
router.post('/login', signIn);

module.exports = router;