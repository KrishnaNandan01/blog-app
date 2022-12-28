const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blog_schema = new Schema({
    title:{type:String, required:true},
    description:{type:String},
    image:{type:String},
    user :{type:String, ref:"registerModel"}

});

const BlogModel = mongoose.model("BlogModel",blog_schema);
module.exports = BlogModel;