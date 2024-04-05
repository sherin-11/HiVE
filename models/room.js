const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    maxcount: {
        type: Number,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    rent: {
        type: String,
        required: true,
    },
    imageurls: [],
    currentbookings: [],
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    feedbacks: [{
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        comment: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User' // Assuming you have a User model
        }
    }]
});

const roomModel = mongoose.model('rooms', roomSchema);

module.exports = roomModel;
