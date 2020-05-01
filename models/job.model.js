//Import the mongoose package
const Mongoose = require('mongoose');
//Create the job schema.
let jobSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
duration: {
        type: String,
        required: false
    }
});
//Add the job object properties
let Job = Mongoose.model('Job',jobSchema);
//export the instance of the model.
module.exports = Job;