const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    rentalDays: { type: Number, required: true },
    moovie: new mongoose.Schema({
        name: { type: String, required: true },
    }),
});

const Order = mongoose.model('Order', OrderSchema);

module.exports = Order;

