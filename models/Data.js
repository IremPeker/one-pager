const mongoose = require("mongoose");

const DataSchema = mongoose.Schema({
  title : {
    type: String
  },
  items: {
    type: Array
  }
});

module.exports = mongoose.model('Data', DataSchema);