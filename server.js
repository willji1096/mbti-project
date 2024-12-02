const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB 스키마
const mbtiDescriptionSchema = new mongoose.Schema({
    pair: String,
    generalDescription: String,
    communicationStyle: String,
    strengthsAndWeaknesses: String,
    growthAreas: String,
    dateActivities: String,
    longTermPotential: String
});

const MBTIDescription = mongoose.model('MBTIDescription', mbtiDescriptionSchema); 