import mongoose from "mongoose";

import { Schema, model } from "mongoose";

const projectSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  tasks: {
    type: Array,
    required: true
  }
});

export default model('Project', projectSchema)
