const express = require('express');
const serviceController = require('./../controllers/serviceController');

const router = express.Router();
let service = require('../models/servicemodel')

//router.param('id', serviceController.checkID);

router
    .route('/')
    .get(serviceController.getAllService)
    .post(serviceController.createService);

router
    .route('/:id')
    .get(serviceController.getService)
    .patch(serviceController.updateService)
    .delete(serviceController.deleteService);

module.exports = router;