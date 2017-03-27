var crypto = require('crypto');

var generateRandomSalt = function(){
  return crypto.randomBytes(256).toString('hex').slice(0, 128);
}

var returnHashedPasswordObj = function(password, salt){
  var hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  var value = hash.digest('hex');

  return {
    salt: salt,
    pass: value
  };
}


var saltHashPassword = function(req, res) {
  var salt = generateRandomSalt();
  console.log('salt from saltHashPassword', salt);
  var passObj = returnHashedPasswordObj('secretsauce', salt);

  console.log('passObj from passObjHashPassword', passObj);

}


 saltHashPassword('supersecret');