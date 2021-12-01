const express = require('express');
const eazzysaveController = require('./../controllers/eazzysavecontroller');

const router = express.Router();
let eazzysave = require('../models/eazzysavemodel')

//router.param('id', serviceController.checkID);

router
    .route('/')
    .get(eazzysaveController.getAllEazzysave)
    .post(eazzysaveController.createEazzysave);

router
    .route('/:id')
    .get(eazzysaveController.getEazzysave)

module.exports = router;