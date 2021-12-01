const mongoose = require('mongoose');
const userserviceSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: [true, 'a user_id is needed']
    },
    service_type: {
        type: String,
        required: [true, 'select your service']
    },
    service_provider: {
        type: String,
        required: [true, 'A service provider must be selected']
    },
    plan:{
        type:{
          type:String
        },
        plan_type: {
            type: String,
            required: [true, 'select your package']
        },
        amount: {
            type: String,
            required: [true, 'provide cost']
        },
        duration:String,
        iuc_num: {
            type: String,
            unique: true
        },
        phone_num: {
            type: String,
            unique: true
        },
        meter_num: {
            type: String,
            unique: true
        },
       },
});

const UserService = mongoose.model('UserService', userserviceSchema);

module.exports = UserService;