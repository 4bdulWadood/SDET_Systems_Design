const jwt = require('jsonwebtoken');
require('dotenv').config()
const Token_Secret_Key = process.env.JWT_SECRET


function createAccessToken(payload){
    return jwt.sign(payload, Token_Secret_Key);
}

module.exports = createAccessToken