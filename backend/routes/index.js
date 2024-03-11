const express=require('express');
const userRouter=require('./user');
const profileRouter=require("./profile");
const searchRouter=require("./search");
const paymentRouter=require("./payment");


const router=express.Router();

router.use("/user", userRouter);
router.use("/profile",profileRouter);
router.use("/dashboard",searchRouter);
router.use("/dashboard",paymentRouter);

module.exports=router;
