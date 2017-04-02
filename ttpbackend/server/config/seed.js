/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import config from './environment/';
import Car from '../api/car/car.model'

export default function seedDatabaseIfNeeded() {
  if(config.seedDB) {

    // User.find({}).remove()
    //   .then(() => {
    //     User.create({
    //       provider: 'local',
    //       name: 'Test User',
    //       email: 'test@example.com',
    //       password: 'test'
    //     }, {
    //       provider: 'local',
    //       role: 'admin',
    //       name: 'Admin',
    //       email: 'admin@example.com',
    //       password: 'admin'
    //     })
    //     .then(() => console.log('finished populating users'))
    //     .catch(err => console.log('error populating users', err));
    //   });


      Car.find({}).remove()
      .then(() => {
        Car.create({
          ownerId: '58dfe9823d583b30845a9c2e',
          carList: [{
            'plateno':'ADM 12',
            primary: true
          }],
        }, {
          ownerId: '58dfe8f77ab2422ad0be13ba',
          carList: [{
            'plateno':'WWW 1111',
            primary: true
          },
          {
            'plateno':'NNN 1234',
            primary: false
          }],
        })
        .then(() => console.log('finished populating cars'))
        .catch(err => console.log('error populating cars', err));
      });
  }
}
