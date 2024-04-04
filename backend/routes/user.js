const express=require('express');
const router=express.Router();
const zod=require('zod');
const jwt=require('jsonwebtoken');
const {JWT_SECRET}=require('../config')
const authMiddleware=require('../middleware');

const app=express();



module.exports=router;