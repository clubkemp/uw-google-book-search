const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  g_id:{type:String}, 
  title:{type:String},  
  authors:[],
  desc:{type:String}, 
  image:{type:String}, 
  link:{type:String} 
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
