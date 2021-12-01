const mongoose = require('mongoose');
const cardSchema = new mongoose.Schema({
    card_name: {
        type: String,
        required: [true, 'A card must have a name']
    },
    card_num: {
        type: Number,
        required: [true, 'A card must have a number'],
        unique: true
    },
    cvv: {
        type: Number,
        required: [true, 'A card must have cvv'],
        unique: true
    },
    exp_date: {
        type: Date,
        required: [true, 'A card must posses an expiry date']
    } 
});


const Card = mongoose.model('Card', cardSchema);

module.exports = Card;