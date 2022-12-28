const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const register_schema = new Schema({
    email:{type:String, required:true},
    password:{type:String, required:true},
});

const registerModel = mongoose.model("registerModel",register_schema);
module.exports = registerModel;