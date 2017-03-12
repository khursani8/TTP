'use strict';

import mongoose from 'mongoose';
import {registerEvents} from './parking.events';

var ParkingSchema = new mongoose.Schema({
  plate: String,
  location: String,
  parkingLot: Number,
  time: Number,
  price: Number
});

registerEvents(ParkingSchema);
export default mongoose.model('Parking', ParkingSchema);
