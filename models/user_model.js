import mongoose from "mongoose";

import { Schema, model } from "mongoose";

const userSchema = new Schema({
  userName: {
    type: String,
    required: true
  },
  email: { 
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  projects: {
    type: Array,
    default: []
  }
});

export default model('User', userSchema)
