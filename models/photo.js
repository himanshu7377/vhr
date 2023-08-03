const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String, required: true },
  images: {
    type: [String], // to store the list of imageurl for the popup functionaility
    default: [], 
  },
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
