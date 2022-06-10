const express = require('express');
const router = express.Router();
const Userctrl= require('../Controlleur/user');

router.post('/signup', Userctrl.signup);

router.post('/login', Userctrl.login);


module.exports=router;


