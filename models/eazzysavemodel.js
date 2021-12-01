const mongoose = require('mongoose');
const eazzysaveSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: [true, 'input your id']
    },
    amount_paid: { 
        type: String, 
        required: [true, 'amount to save']
    },
    current_balance: {
        type: String,
        required: [true, 'total balance is']
    },
    bvn: {
        type: String,
        required: [true, 'input bvn']
    },
    transaction:{
        type:{
          type:String
        },
        transaction_type: {
            type: String,
            required: [true, 'select your transaction type']
        },
        // debit: String,
        credit: String
    },
});

const Eazzysave = mongoose.model('Eazzysave', eazzysaveSchema);

module.exports = Eazzysave;