'use strict';

var express = require('express');
var controller = require('./car.controller');

var router = express.Router();
import * as auth from '../../auth/auth.service';

router.get('/', controller.index);
router.get('/:id', controller.show);
router.get('/ownerId/:id',auth.isAuthenticated(), controller.showCar);
router.post('/', controller.create);
router.put('/:id', controller.upsert);
router.put('/ownerId/:id', controller.upsert1);
router.patch('/:id', controller.patch);
router.delete('/:id', controller.destroy);

module.exports = router;
