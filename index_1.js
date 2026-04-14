function anotherInsecurePassword() {
  // GOOD: use cryptographically secure random bytes for the suffix
  var suffix = require('crypto').randomBytes(16).toString('hex');
  var password = "sssAAAA" + suffix;
  return password;
}