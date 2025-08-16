import mongoose, { Schema } from "mongoose";

const schema = new Schema({
  name: {
    required: true,
    type: String,
  },
  details: {
    required: true,
    type: String,
  },
  location: {
    required: true,
    type: String,
  },
  imageUrl: {
    required: true,
    type: String,
  },
  interested_ids: {
    required: false,
    type: [String],
  },
  going_ids: {
    required: false,
    type: [String],
  },
  swags: {
    required: false,
    type: [String],
  },
  date: {
    required: false,
    type: Date,
  },
});

export const eventModel =
  mongoose.models.events ?? mongoose.model("events", schema);
