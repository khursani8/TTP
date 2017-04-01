'use strict';

import mongoose,{Schema} from 'mongoose';
import {registerEvents} from './car.events';

var CarSchema = new mongoose.Schema({
  ownerId: Schema.Types.ObjectId,
  carList: [Schema.Types.Mixed],
});

registerEvents(CarSchema);
export default mongoose.model('Car', CarSchema);
