const jwt = require("jsonwebtoken");
const secret = "Naman$123@$";

// Create tokens
function setUser(user) {
  return jwt.sign(user, secret);
}

function getUser(token) {
  if (!token) return null;
  return jwt.verify(token, secret);
}

module.exports = {
  setUser,
  getUser,
};
