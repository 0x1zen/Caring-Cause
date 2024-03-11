const express=require('express');
const router=express.Router();
const zod=require('zod');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config')

// Define user authentication routes
// 1.Signin
// 2.Singup
// 3.Forgot Password

module.exports=router;