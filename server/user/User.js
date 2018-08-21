var mongoose = require('mongoose');  
var UserSchema = new mongoose.Schema({  
  name: String,
  email: String,
  password: String,
  postalCode: String,
  creditCardNumber: Number,
  expiryDateOfCard: String,
  cvv: String
});
mongoose.model('User', UserSchema);

module.exports = mongoose.model('User');
