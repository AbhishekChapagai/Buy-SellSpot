const mongoose = require('mongoose');
const router = require('../Routes/userRouter');
const Product = mongoose.model('Product',{
    userid:{
        type : String
    },
    vehicleName:{
        type : String
    },
    vehicleModel:{
        type : String
    },
    vehicleMileage:{
        type : String
    },
    
    
    vehicleYear:{
        type: String
    },
    vehicleTransmission:{
        type: String
    },
    vehiclePrice:{
        type: String
    },
    contact:{
        type: String
    },
    pimage:{
        type : String
    }
})

module.exports = Product;