const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({
    productName:{
        type:String,
        required:true
    },
    productId:{
        type: Number,
        required: true
    },
    quantity:{
        type:Number,
        required:true
    }
});

const Inventory = mongoose.model('Inventory',inventorySchema);

module.exports = Inventory;