const mongoose = require('mongoose');
const serviceSchema = new mongoose.Schema({
    service_Provider: {
        type: String,
        required: [true, 'A service provider must have selected']
    },
    service: {
        type: String,
        required: [true, 'A service must be selected'], 
    },
    plan:[{
      type:{
        type:String
      },
      plan_type: {
        type: String,
        required: [true, 'A plan_type must be selected']
      },
      amount: {
        type: String,
        required: [true, 'provide cost']
      },
      duration:String
     }]
      });

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;