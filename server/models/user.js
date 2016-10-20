var mongoose = require ('mongoose')
var Schema = mongoose.Schema
var UserSchema = new mongoose.Schema({
  name: { type: String, required: true},
  portions: { type: Schema.Types.ObjectId, ref: 'Veggie'}
})
var User = mongoose.model('User', UserSchema)

module.exports = User
