const express = require('express');
const cardController = require('./../controllers/cardController');

const router = express.Router();
let card = require('../models/cardmodel')

//router.param('id', cardController.checkID);

router
    .route('/')
    .get(cardController.getAllCard)
    .post(cardController.createCard);

router
    .route('/:id')
    .get(cardController.getCard)
    .patch(cardController.updateCard)
    .delete(cardController.deleteCard);

module.exports = router;