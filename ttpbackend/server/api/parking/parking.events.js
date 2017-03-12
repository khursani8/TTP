/**
 * Parking model events
 */

'use strict';

import {EventEmitter} from 'events';
var ParkingEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
ParkingEvents.setMaxListeners(0);

// Model events
var events = {
  save: 'save',
  remove: 'remove'
};

// Register the event emitter to the model events
function registerEvents(Parking) {
  for(var e in events) {
    let event = events[e];
    Parking.post(e, emitEvent(event));
  }
}

function emitEvent(event) {
  return function(doc) {
    ParkingEvents.emit(event + ':' + doc._id, doc);
    ParkingEvents.emit(event, doc);
  };
}

export {registerEvents};
export default ParkingEvents;
