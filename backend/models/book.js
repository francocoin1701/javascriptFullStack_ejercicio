const {Schema, model} = require("mongoose");

const bookSchema = new Schema({

    title: {required:true, type: String},
    author: {type:String, required: true},
    isbn: {type: String, required: true},
    image: {type: String, required:true },   
    create_at: {type: Date, default:Date.now}
});

module.exports = model("book",bookSchema)