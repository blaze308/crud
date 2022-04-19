const { Schema, model } = require("mongoose");

const postSchema = new Schema({
  //if compulsory
  title: {
    type: String,
    required: true,
  },
  //   if optional
  //   content: String
  content: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
});

module.exports = model("Post", postSchema);
