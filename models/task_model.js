import mongoose from "mongoose";

import { Schema, model } from "mongoose";

const taskSchema = new Schema({
  status: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  header: {
    type: String,
    required: true
  },
  date_of_creation: {
    type: Date,
    required: true
  },
  expiration_date: {
    type: Date,
    required: true
  },
  priority: {
    type: Number,
    required: true
  },
  time_in_wordk: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  subtasks: {
    type: Array,
    required: true
  },
  files: {
    type: Array,
    required: true
  }
}, { timestamps: true });

export default model('Task', taskSchema)