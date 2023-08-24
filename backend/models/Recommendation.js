// models/BookRecommendation.js

const mongoose = require('mongoose');

const bookRecommendationSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  description: String,
  rating: Number,
  // Add more fields as needed
});

const BookRecommendation = mongoose.model('BookRecommendation', bookRecommendationSchema);

module.exports = BookRecommendation;
