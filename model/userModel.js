const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    message:{
        type: String,
    },
    createdDate: { 
        type: Date, 
        default: Date.now 
    },
    updatedDate: { 
        type: Date, 
        default: Date.now 
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User