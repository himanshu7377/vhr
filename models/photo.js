const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  images: {
    type: [String], // Array of image URLs
    default: [], // Default empty array
  },
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
