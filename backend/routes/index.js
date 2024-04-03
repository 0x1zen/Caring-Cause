const express=require('express');
const userRouter=require('./user');
const campaignRouter=require('./campaign');
const { Campaign } = require('../db');

const app=express();

app.get('/projects', async (req, res) => {
    try {
      const projects = await Campaign.find({}, 'picture campaignName category startDate endDate donationAmount');
      res.status(200).json(projects);
    } catch (error) {
      console.error('Error retrieving projects:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });

router.use("/user", userRouter);
router.use("/campaign",campaignRouter)

module.exports=router;
