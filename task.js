//Import mongoose since it'll be used in the mongodb model
const mongoose = require('mongoose');

//Create a Schema
const taskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: String,
    completed: {type: Boolean, default: false},
});

//Export the model
module.exports = mongoose.model('Task', taskSchema);