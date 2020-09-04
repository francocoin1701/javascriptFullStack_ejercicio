const {Schema, model} = require("mongoose");

const bookSchema = new Schema({
    title: {required:true, type: String},
    autor: {type:String,required:true},
    isbn: {type: String, required: true},
    imagepath: {type: String, required: false},
    create_at: {type: Date, default:Date.now}
});

module.exports = model("book",bookSchema)