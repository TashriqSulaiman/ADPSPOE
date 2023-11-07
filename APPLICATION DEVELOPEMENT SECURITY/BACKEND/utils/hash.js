const bycrypt = require('bycrypt');

async function hashPassword(password) {
    const salt = await bycrypt.genSalt(10);
    const hashed = bycrypt.hash(password, salt);
    return hashed;
}

async function isValidPassword(password, hash) {
    return await bycrypt.compare(password, hash);
}

module.exports = { hashPassword, isValidPassword };
