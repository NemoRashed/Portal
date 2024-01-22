var express = require('express');
var router = express.Router();
var Controllers = require('../controllers/index.js');

// Home
router.get('/', Controllers.Home);

// Sign Up
router.get('/signup', Controllers.signupGetController);
router.post('/signup', Controllers.signUpPostController);

// Login
router.get('/login', Controllers.loginGetController);
router.post('/login', Controllers.loginPostController);

// LogOut
router.get('/logout', Controllers.logOutController);

// Transaction 
router.get('/transaction', Controllers.transactionController);
router.post('/transaction', Controllers.transactionPostController);
router.delete('/delete/:transaction', Controllers.deleteTransaction);

// Admin
router.get('/admin', Controllers.adminGetController);
router.post('/admin', Controllers.adminPostController);

module.exports = router;
