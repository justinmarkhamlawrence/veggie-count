var mongoose = require('mongoose')
var Schema = mongoose.Schema
var VeggieSchema = new mongoose.Schema({
  name: {type: String, required: true},
  time : { type : Date, default: Date.now }
})

var Veggie = mongoose.model('Veggie', VeggieSchema)

module.exports = Veggie
