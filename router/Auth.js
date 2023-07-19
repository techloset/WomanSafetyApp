const express = require('express');
const router = express.Router();
const authController = require('../controller/Auth')






router

    .post('/signUp', authController.signUp)
    .post('/login', authController.login)
    .post('/image', authController.imageUpload)




exports.router = router;