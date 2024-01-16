// models/TollGateData.js
const mongoose = require('mongoose');

const tollGateDataSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  expressway: { type: String, required: true },
  entry: { type: String, required: true },
  exit: { type: String, required: true },
  vehicle: { type: String, required: true },
  vehicleClass: { type: String, required: true },
  price: { type: Number, required: true },
});

const TollGateData = mongoose.model('TollGateData', tollgatedataSchema, 'tollgatedatas');


module.exports = TollGateData;
