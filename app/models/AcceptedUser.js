import mongoose from 'mongoose';

const AcceptedUserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },                // Current date and time
  lastLogin: { type: Date },                                  // Last login date and time
  status: { 
    type: String, 
    enum: ['active', 'disabled', 'pending disable'], 
    default: 'active' 
  },                                                          
  adminStatus: { 
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  }                // Admin status
}, { timestamps: true });

const AcceptedUser = mongoose.models.AcceptedUser || mongoose.model("AcceptedUser", AcceptedUserSchema);

export default AcceptedUser;
