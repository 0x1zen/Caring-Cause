const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// userinfo collection schema
const userinfoSchema = new mongoose.Schema({
  username: { 
    type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    minLength: 3,
    maxLength: 30 
    },
  name: {
      type: String,
      required: true,
      trim: true,
      maxLength: 50
  },

  // Other user information fields...
});

// campaigns collection schema
const campaignSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'Userinfo', required: true }, // Reference to userinfo
  picture:{type:String,required:true},
  campaignName: { type: String, required: true },
  category:{type:String,required:true},
  donationAmount:{type:Number,required:true},
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  transactions: [{
    transactionType: { type: String, enum: ['donation', 'purchase'], required: true },
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now }
    // Other transaction fields...
  }]
});

const Userinfo = mongoose.model('Userinfo', userinfoSchema);
const Campaign = mongoose.model('Campaign', campaignSchema);



  module.exports = {
    Userinfo,
    Campaign
};