const express = require('express');
const userserviceController = require('./../controllers/userserviceController');

const router = express.Router();
let userservice = require('../models/userservicemodel')


router
        .route('/')
        .get(userserviceController.getAllUserService)
        .post(userserviceController.createUserService);


router
        .route('/:id')
        .get(userserviceController.getUserService)
        .patch(userserviceController.updateUserService)
        .delete(userserviceController.deleteUserService);

module.exports = router;